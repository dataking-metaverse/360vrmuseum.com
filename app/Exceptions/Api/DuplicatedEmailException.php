<?php

namespace App\Exceptions\Api;


use Illuminate\Validation\Validator;

class DuplicatedEmailException extends Exception {

    private $email = null;

    public function __construct(string $email) {
        parent::__construct();
        $this->email = $email;
    }

    function jsonSerialize() {
        return static::jsonResponse([
            'status' => 400,
            'success' => false,
            'message' => static::messageFormat(),
        ]);
    }
}
