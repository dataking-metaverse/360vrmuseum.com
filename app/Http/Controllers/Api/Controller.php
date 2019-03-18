<?php

namespace App\Http\Controllers\Api;


use App\Exceptions\Api\NotFoundException;
use App\Http\Controllers\Controller as BasicController;
use Illuminate\Http\Request;

class Controller extends BasicController {

    private $request = null;

    static function response($options) {
        return response()->json(array_merge([
            'status' => 200,
            'success' => true,
            'message' => null,
            'messageParams' => [],
            'data' => null,
        ], $options));
    }

    static function success($data) {
        return static::response(['data' => $data]);
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
}
