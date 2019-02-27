<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function home(Request $request) {
        return view('layout', [
            'app' => (object)[],
            'config' => config('360vrmuseum.public'),
        ]);
    }
}
