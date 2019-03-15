<?php

namespace App\Exceptions\Api;

use App\Exceptions\CustomException;

class Exception extends CustomException implements \JsonSerializable {

    static function basicJsonResponse() {
        return [
            'status' => 500,
            'success' => false,
            'message' => 'Internal Server Error',
            'messageParams' => [],
            'data' => null,
        ];
    }

    static function jsonResponse($options = []) {
        if (is_numeric($options)) { $options = [ 'status' => $options ]; }
        return array_merge(static::basicJsonResponse(), $options);
    }


    function jsonSerialize() {
        return static::jsonResponse();
    }
}
