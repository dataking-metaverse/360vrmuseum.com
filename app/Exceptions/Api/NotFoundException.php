<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class NotFoundException extends Exception {

    public function __construct() {
        parent::__construct();
    }

    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 404,
            'success' => false,
            'message' => 'The requested resource cannot be found',
            'messageParams' => [],
            'data' => null,
        ]);
    }
}
