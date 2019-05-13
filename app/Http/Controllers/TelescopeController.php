<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TelescopeController extends Controller
{
    public function index(Request $request) {
        return view('telescope', [
            'preloadedState' => json_encode((object)[
                'config' => config('360vrmuseum.public'),
                'app' => [
                    'routes' => routes([
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
            ]),
        ]);
    }
}
