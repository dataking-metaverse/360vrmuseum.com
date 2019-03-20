<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class UnauthorizedException extends Exception {
    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 401,
            'success' => false,
            'message' => static::messageFormat(),
            'messageParams' => [],
            'data' => null,
        ]);
    }
}
