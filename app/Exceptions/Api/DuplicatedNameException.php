<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class DuplicatedNameException extends Exception {

    private $name = null;

    public function __construct(string $name) {
        parent::__construct();
        $this->name = $name;
    }

    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 400,
            'success' => false,
            'message' => static::messageFormat(),
        ]);
    }
}
