<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function home() { return $this->all(); }
    public function nationalMuseum() { return $this->all(); }
    public function vrmuseum() { return $this->all(); }
    public function contactUs() { return $this->all(); }
    public function login() { return $this->all(); }

    public function all() {
        dd(config('360vrmuseum.showcases'));
        return view('layout', [
            'app' => [
                'routes' => [
                    'home' => route('home', null, false),
                    'national-museum' => route('national-museum', null, false),
                    'vrmuseum' => route('vrmuseum', null, false),
                    'contact-us' => route('contact-us', null, false),
                    'privacy-policy' => route('privacy-policy', null, false),
                    'login' => route('login', null, false),
                ]
            ],
            'config' => config('360vrmuseum.public'),
            'lang' => config('lang.ko'), // TODO : make different translations
        ]);
    }
}
