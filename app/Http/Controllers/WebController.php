<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormEmail;
use Illuminate\Http\Request;
use Route;


class WebController extends Controller {

    static function toFrontEndRoute($route) {
        return str_replace(['{', '}'], [':', ''], $route);
    }

    static function contexts() {
        return [
            'user' => AuthController::userFields(),
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
                    'signup',
                    'search',
                    'api.showcase',
                    'api.showcase.by-presented-by',
                    'api.showcases',
                    'api.showcases.by-presented-bys',
                    'api.showcases.search',
                    'api.comment.by-showcase',
                    'api.comment.post',
                    'api.contact.send',
                    'api.auth.login',
                    'api.auth.signup',
                    'api.auth.logout',
                    'api.auth.user',
                    'api.lang',
                ]),
            ],
            'config' => config('360vrmuseum.public'),
            'lang' => config('lang.ko'), // TODO : make different translations
        ];
    }

    static function routes($routeNames) {
        return collect(Route::getRoutes())->filter(function($route) use ($routeNames) {
            return isset($route->action['as']) && in_array($route->action['as'], $routeNames);
        })->mapWithKeys(function($route) {
            $url = str_start(self::toFrontEndRoute($route->uri), '/');
            return [$route->action['as'] => $url];
        });
    }

    public function ssr() {
        $routeName = \Request::route()->getName();
        $context = static::contexts();
        $ssr = ssr('js/app-server.js')
            ->context('user', $context['user'])
            ->context('app', $context['app'])
            ->context('config', $context['config'])
            ->context('lang', $context['lang'])
            ->context('viewProps', [
                'lang' => 'ko',
                'debug' => config('app.debug'),
                'user' => json_encode($context['user'], JSON_UNESCAPED_UNICODE),
                'config' => json_encode($context['config'], JSON_UNESCAPED_UNICODE),
                'app' => json_encode($context['app'], JSON_UNESCAPED_UNICODE),
                'js' => mix('/js/app.js')->toHtml(),
                'meta' => config("lang.ko.pages.{$routeName}.meta"),
            ])
            ->render();
        return $ssr;
    }
    public function home() { return $this->all(); }
    public function showcase() { return $this->all(); }
    public function nationalMuseum() { return $this->all(); }
    public function vrmuseum() { return $this->all(); }
    public function contactUs() { return $this->all(); }
    public function privacyPolicy() { return $this->all(); }
    public function termsOfService() { return $this->all(); }
    public function login() { return $this->all(); }
    public function signup() { return $this->all(); }
    public function search() { return $this->all(); }

    public function all() {
        return static::ssr();
        return view('layout', static::contexts());
    }
}
