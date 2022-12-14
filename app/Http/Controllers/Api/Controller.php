<?php

namespace App\Http\Controllers\Api;


use App\Exceptions\Api\MissingParameterException;
use App\Exceptions\Api\NotFoundException;
use App\Http\Controllers\Controller as BasicController;
use Illuminate\Http\Request;

class Controller extends BasicController {

    private $request = null;

    static function response($options) {
        return responseJson($options);
    }

    static function success($data) {
        return successJson($data);
    }

    static function abortNotFound() {
        throw new NotFoundException();
    }

    public function __construct(Request $request) {
        $this->request = $request;
    }

    public function requireParam($key) {
        $value = $this->request->get($key);
        if (is_null($value)) { throw new MissingParameterException($key); }
        return $value;
    }

    public function param($key) {
        $value = $this->request->get($key);
        return !is_null($value) ? $value : null;
    }
}
