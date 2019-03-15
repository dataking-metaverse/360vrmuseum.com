<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function home() { return $this->all(); }
    public function nationalMuseum() { return $this->all(); }
    public function vrmuseum() { return $this->all(); }
    public function contactUs() { return $this->all(); }
    public function privacyPolicy() { return $this->all(); }
    public function termsOfService() { return $this->all(); }
    public function login() { return $this->all(); }

    public function all() {
        return view('layout', [
            'app' => [
                'routes' => [
                    'home' => route('home', null, false),
                    'national-museum' => route('national-museum', null, false),
                    'vrmuseum' => route('vrmuseum', null, false),
                    'contact-us' => route('contact-us', null, false),
                    'privacy-policy' => route('privacy-policy', null, false),
                    'terms-of-service' => route('terms-of-service', null, false),
                    'login' => route('login', null, false),
                    'api.showcases' => route('api.showcases', null, false),
                    'api.showcase' => route('api.showcase', null, false),
                ]
            ],
            'config' => config('360vrmuseum.public'),
            'lang' => config('lang.ko'), // TODO : make different translations
        ]);
    }
}
