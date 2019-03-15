<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\ValidationException;
use Validator;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    const VALIDATE_MID = 'min:11|max:11|alpha_num';

    function __construct(Request $request) {
        parent::__construct($request);
        $validation = Validator::make($request->all(), [
            'mid' => static::VALIDATE_MID,
            'mids' => 'array',
            'mids.*' => static::VALIDATE_MID,
            'presented_by' => 'string',
            'presented_bys' => 'array',
            'presented_bys.*' => 'string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    function all() {
        return config('360vrmuseum.showcases');
    }

    function multi(Request $request) {
        $mids = $this->requireParam('mids');
        return static::success(array_values(array_where(static::all(), function($showcase) use ($mids) {
            return isset($showcase['mid']) && in_array($showcase['mid'], $mids);
        })));
    }

    function single(Request $reuqest) {
        $mid = $reuqest->get('mid');
        return static::success(array_first(static::all(), function($showcase) use ($mid) {
            return isset($showcase['mid']) && $showcase['mid'] === $mid;
        }));
    }

    function byPresentedBys(Request $request) {
        $presentedBys = $request->get('presented_bys');

        // get all the related showcases, then group them using object (k-v pairs)
        $showcases = collect(static::all())->filter(function($showcase) use ($presentedBys) {
            return isset($showcase['presented_by']) && in_array($showcase['presented_by'], $presentedBys);
        })->groupBy('presented_by');

        return static::success($showcases);
    }
}
