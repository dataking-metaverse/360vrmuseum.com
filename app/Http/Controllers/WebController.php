<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function home(Request $request) {
        return view('layout', [
            'app' => [
                'routes' => [
                    'home' => route('home', null, false),
                    'national-museum' => route('national-museum', null, false),
                    'vrmuseum' => route('vrmuseum', null, false),
                    'contact-us' => route('contact-us', null, false),
                ]
            ],
            'config' => config('360vrmuseum.public'),
        ]);
    }
}
