<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\Exceptions\Api\ValidationException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LangController extends Controller
{

    public function __construct(Request $request) {
//        parent::__construct($request);
        $validation = Validator::make($request->all(), [
            'locale' => 'required|string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    function get(Request $request) {
        // ALWAYS RETURN ko for now
        return successJson(config('lang.ko'));
    }
}
