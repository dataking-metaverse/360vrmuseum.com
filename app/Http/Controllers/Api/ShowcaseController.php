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

    static function raw() {
        return config('360vrmuseum.showcases');
    }

    static function addStatistics(array $showcases) {
        $statistics = Cache::get(FetchShowcaseStatistics::CACHE_KEY) ?? [];
        return array_map(function($showcase) use ($statistics) {
            $mid = $showcase['mid'];
            $statistic = $statistics[$mid] ?? [];
            $showcase['statistics'] = [
                'impressions' => $statistic['impressions'] ?? 0,
                'visits' => $statistic['views'] ?? 0,
                'unique_visitors' => $statistic['unique_visitors'] ?? 0,
            ];
            return $showcase;
        }, $showcases);
    }

    static function statistics(string $mid) {
        $statistics = Cache::get(FetchShowcaseStatistics::CACHE_KEY) ?? [];
        $statistic = $statistics[$mid] ?? [];
        return [
            'impressions' => $statistic['impressions'] ?? 0,
            'visits' => $statistic['views'] ?? 0,
            'unique_visitors' => $statistic['unique_visitors'] ?? 0,
        ];
    }

    static function propEq(string $key, $value): array {
        $showcase = array_first(static::raw(), function($showcase) use ($key, $value) {
            return isset($showcase[$key]) && $showcase[$key] === $value;
        });
        return $showcase ? static::addStatistics([$showcase])[0] : [];
    }

    static function propIn(string $key, array $value): array {
        $filtered = array_values(array_where(static::raw(), function($showcase) use ($key, $value) {
            return isset($showcase[$key]) && in_array($showcase[$key], $value);
        }));
        return static::addStatistics($filtered);
    }

    static function searchPhraseas(array $phrases): array {
        $filtered = array_values(array_where(static::raw(), function($showcase) use ($phrases) {
            $haystack = json_encode($showcase, JSON_UNESCAPED_UNICODE);
            foreach($phrases as $phrase) {
                if (stripos($haystack, trim($phrase)) !== false) return true;
            }
            return false;
        }));
        return static::addStatistics($filtered);
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
        User::pushViewHistory($mid);
        $singleShowcase['statistics'] = self::getDatabaseStatistics($mid);
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
