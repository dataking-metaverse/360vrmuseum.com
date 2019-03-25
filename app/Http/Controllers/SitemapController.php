<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index(Request $request) {
        $linkList = [
            route('national-museum'),
            route('vrmuseum'),
            route('contact-us'),
            route('privacy-policy'),
            route('terms-of-service'),
            route('login'),
            route('signup'),
        ];
        $showcaseRouteList = collect(config('360vrmuseum.showcases'))->pluck('mid')->map(function($mid) { return route('showcase', $mid); });
        $view = view('sitemap', [
            'linkList' => $showcaseRouteList->merge($linkList),
        ]);
        return response($view)->header('Content-Type', 'text/xml');
    }
}
