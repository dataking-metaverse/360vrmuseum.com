<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class ValidationException extends Exception {

    private $validation = null;

    public function __construct(Validator $validation) {
        parent::__construct();
        $this->validation = $validation;
    }

    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 401,
            'success' => false,
            'message' => 'Validation Failed',
            'messageParams' => [],
            'data' => $this->validation->errors(),
        ]);
    }
}
