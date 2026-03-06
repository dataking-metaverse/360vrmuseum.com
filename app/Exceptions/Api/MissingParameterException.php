<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class MissingParameterException extends Exception {

    private $paramKey = null;

    public function __construct(string $paramKey) {
        parent::__construct();
        $this->paramKey = $paramKey;
    }

    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 401,
            'success' => false,
            'message' => static::messageFormat(),
            'messageParams' => [$this->paramKey],
            'data' => null,
        ]);
    }
}
