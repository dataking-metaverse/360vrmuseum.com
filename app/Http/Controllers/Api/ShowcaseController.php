<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\ValidationException;
use Validator;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    const VALIDATE_MID = 'min:11|max:11|alpha_num';

    static function all() {
        return config('360vrmuseum.showcases');
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
        $mid = $this->requireParam('mid');
        return static::success(static::propEq('mid', $mid));
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
