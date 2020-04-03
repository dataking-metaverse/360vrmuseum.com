<?php
namespace App\Http\Controllers\Api;

use App\Console\Commands\FetchShowcaseStatistics;
use App\Exceptions\Api\NotFoundException;
use App\Exceptions\Api\UnauthorizedException;
use App\Exceptions\Api\ValidationException;
use App\User;
use App\VRMuseum\User as MongoUser;
use App\VRMuseum\Model;
use App\VRMuseum\ModelLoadHistory;
use App\VRMuseum\ModelPlayHistory;
use Cache;
use Validator;
use Illuminate\Http\Request;


class ShowcaseController extends Controller
{
    const VALIDATE_MID = 'min:11|max:11|alpha_num';

    static function all() {
        return array_map(function($showcase) {
            $mid = $showcase['mid'];
            $showcase['statistics'] = self::statistics($mid);
            return $showcase;
        }, config('360vrmuseum.showcases'));
    }

    // TODO : option for no caching
    static function statistics(string $mid) {
        // caching is necessary for avoiding overload
        $statistics = Cache::get(FetchShowcaseStatistics::CACHE_KEY);
        $statistic = $statistics[$mid] ?? [];
        return [
            'impressions' => $statistic['impressions'] ?? 0,
            'visits' => $statistic['views'] ?? 0,
            'unique_visitors' => $statistic['unique_visitors'] ?? 0,
        ];
    }

    static function propEq(string $key, $value): array {
        return array_first(static::all(), function($showcase) use ($key, $value) {
            return isset($showcase[$key]) && $showcase[$key] === $value;
        });
    }

    // TODO : make a limit for this function
    static function propIn(string $key, array $value): array {
        return array_values(array_where(static::all(), function($showcase) use ($key, $value) {
            return isset($showcase[$key]) && in_array($showcase[$key], $value);
        }));
    }

    static function searchPhraseas(array $phrases): array {
        return array_values(array_where(static::all(), function($showcase) use ($phrases) {
            $haystack = json_encode($showcase, JSON_UNESCAPED_UNICODE);
            foreach($phrases as $phrase) {
                return stripos($haystack, trim($phrase)) !== false;
            }
        }));
    }

    static function userHasPrivilege(string $privilege): bool {
        $user = auth()->user();
        return User::hasPrivilegeSafe($user, $privilege);
    }

    static function getDatabaseStatistics(string $mid): array {
        return [
            "impressions" => ModelLoadHistory::countByMid($mid),
            "visits" => ModelPlayHistory::countByMid($mid),
            "unique_visitors" => ModelPlayHistory::countByMidUniqueIp($mid),
        ];
    }

    function __construct(Request $request) {
        parent::__construct($request);
        $validation = Validator::make($request->all(), [
            'mid' => static::VALIDATE_MID,
            'mids' => 'array',
            'mids.*' => static::VALIDATE_MID,
            'presented_by' => 'string',
            'presented_bys' => 'array',
            'presented_bys.*' => 'string',
            'q' => 'string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    function multi(Request $request) {
        $mids = $this->requireParam('mids');
        return static::success(static::propIn('mid', $mids));
    }

    function single(Request $reuqest) {
        if (!static::userHasPrivilege('viewShowcases')) { throw new UnauthorizedException(); }
        $mid = $this->requireParam('mid');
        $singleShowcase = static::propEq('mid', $mid);
        if (!$singleShowcase) { throw new NotFoundException(); }
        if ($this->param("testing") === "1") { dd(self::getDatabaseStatistics($mid)); }
        User::pushViewHistory($mid);
        return static::success($singleShowcase);
    }

    function byPresentedBy(Request $request) {
        $presentedBy = $this->requireParam('presented_by');
        $showcases = static::propIn('presented_by', [$presentedBy]);
        return static::success($showcases);
    }

    function byPresentedBys(Request $request) {
        $presentedBys = $this->requireParam('presented_bys');
        $showcasesGroups = collect(static::propIn('presented_by', $presentedBys))->groupBy('presented_by');
        return static::success($showcasesGroups);
    }

    function search(Request $request) {
        $query = $this->requireParam('q');
        $phrases = explode(' ', $query);
        $showcases = static::searchPhraseas($phrases);
        return static::success($showcases);
    }

}
