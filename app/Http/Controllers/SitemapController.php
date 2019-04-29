<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index(Request $request) {
        $linkList = collect([
            route('home'),
            route('national-museum'),
            route('vrmuseum'),
            route('contact-us'),
            route('signup'),
            route('login'),
            route('privacy-policy'),
            route('terms-of-service'),
        ]);
        $showcaseRouteList = collect(config('360vrmuseum.showcases'))->pluck('mid')->map(function($mid) { return route('showcase', $mid); });
        $view = view('sitemap', [
            'linkList' => $linkList->merge($showcaseRouteList),
            'lastMod' => date('Y-m-dTH:i:sP', 1556502138),
        ]);
        return response($view)->header('Content-Type', 'text/xml');
    }
}
