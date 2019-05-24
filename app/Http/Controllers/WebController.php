<?php

namespace App\Http\Controllers;

use Route;


class WebController extends Controller {

    static function redirectByPageId() {
        $pageId = request()->get('page_id');
        if ($pageId) {
            $routeParams = config("360vrmuseum.pageIdMap.{$pageId}");
            if ($routeParams) {
                response()->redirectTo(route(...$routeParams))->send();
            }
        }
    }

    static function contexts() {
        return [
            'user' => AuthController::userFields(),
            'app' => [
                'routes' => routes([
                    'home',
                    'showcase',
                    'national-museum',
                    'national-museum.single',
                    'vrmuseum',
                    'contact-us',
                    'my-account',
                    'privacy-policy',
                    'terms-of-service',
                    'login',
                    'signup',
                    'search',
                    'forgot-password',
                    'reset-password',
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
                    'password-reset.create',
                    'password-reset.find',
                    'password-reset.reset',
                ]),
            ],
            'config' => config('360vrmuseum.public'),
            'lang' => config('lang.ko'), // TODO : make different translations
        ];
    }

    public function ssr() {
        $route = \Request::route();
        $routeName = $route->getName();
        $routeUri = $route->uri;
        $context = static::contexts();
        $ssr = ssr('js/app-server.js')
            ->context('user', $context['user'])
            ->context('app', $context['app'])
            ->context('config', $context['config'])
            ->context('lang', $context['lang'])
            ->context('route', $routeUri)
            ->context('viewProps', [
                'locale' => 'ko',
                'lang' => json_encode($context['lang'], JSON_UNESCAPED_UNICODE),
                'debug' => config('app.debug'),
                'user' => json_encode($context['user'], JSON_UNESCAPED_UNICODE),
                'config' => json_encode($context['config'], JSON_UNESCAPED_UNICODE),
                'app' => json_encode($context['app'], JSON_UNESCAPED_UNICODE),
                'js' => mix('/js/app.js')->toHtml(),
                'googleTagManagerKey' => env('GOOGLE_TAG_MANAGER_KEY'),
                'recaptchaSiteKey' => env('RECAPTCHA_SITE_KEY'),
                'version' => config('version'),
            ])
            ->render();
        return $ssr;
    }
    public function home() {
        // handling page id for the old website
        static::redirectByPageId();
        return $this->all();
    }
    public function showcase() { return $this->all(); }
    public function nationalMuseum() { return $this->all(); }
    public function vrmuseum() { return $this->all(); }
    public function contactUs() { return $this->all(); }
    public function myAccount() { return $this->all(); }
    public function privacyPolicy() { return $this->all(); }
    public function termsOfService() { return $this->all(); }
    public function login() { return $this->all(); }
    public function signup() { return $this->all(); }
    public function search() { return $this->all(); }
    public function forgotPassword() { return $this->all(); }
    public function resetPassword() { return $this->all(); }

    public function all() {
        return static::ssr();
//        return view('layout', static::contexts());
    }

    public function temp() {
        $showcases = collect(config('360vrmuseum.showcases'));
        return $showcases->mapWithKeys(function($value) {
            return [ str_replace('https://360vrmuseum.com/?page_id=', '', $value['page_url']) => $value['mid'] ];
        });
    }
}
