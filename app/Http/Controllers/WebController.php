<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Route;


class WebController extends Controller {

    static function toFrontEndRoute($route) {
        return str_replace(['{', '}'], [':', ''], $route);
    }

    static function routes($routeNames) {
        return collect(Route::getRoutes())->filter(function($route) use ($routeNames) {
            return isset($route->action['as']) && in_array($route->action['as'], $routeNames);
        })->mapWithKeys(function($route) {
            $url = str_start(self::toFrontEndRoute($route->uri), '/');
            return [$route->action['as'] => $url];
        });
    }

    public function home() { return $this->all(); }
    public function showcase() { return $this->all(); }
    public function nationalMuseum() { return $this->all(); }
    public function vrmuseum() { return $this->all(); }
    public function contactUs() { return $this->all(); }
    public function privacyPolicy() { return $this->all(); }
    public function termsOfService() { return $this->all(); }
    public function login() { return $this->all(); }
    public function search() { return $this->all(); }

    public function all() {
        return view('layout', [
            'app' => [
                'routes' => static::routes([
                    'home',
                    'showcase',
                    'national-museum',
                    'vrmuseum',
                    'contact-us',
                    'privacy-policy',
                    'terms-of-service',
                    'login',
                    'search',
                    'api.showcase',
                    'api.showcase.by-presented-by',
                    'api.showcases',
                    'api.showcases.by-presented-bys',
                    'api.showcases.search',
                ]),
            ],
            'config' => config('360vrmuseum.public'),
            'lang' => config('lang.ko'), // TODO : make different translations
        ]);
    }
}
