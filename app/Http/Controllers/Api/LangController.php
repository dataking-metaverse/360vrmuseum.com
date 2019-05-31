<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\ValidationException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

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
