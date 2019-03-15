<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller as BasicController;
use Illuminate\Http\Request;

class Controller extends BasicController {

    private $request = null;

    public function __construct(Request $request) {
        $this->request = $request;
    }

    public function requireParam($key) {
        $value = $this->request->get($key);
        if (is_null($value)) { throw new MissingParameterException($key); }
        return $value;
    }
}
