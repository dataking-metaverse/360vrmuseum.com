<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RobotsController extends Controller {
    function index(Request $request) {
        $lines = [];
        $lines[] = 'Sitemap: ' . route('sitemap');
        $lines[] = 'User-agent: *';
        $lines[] = 'Disallow';
        $lines[] = '';
        $output = implode("\n", $lines);
        return response($output)->header('Content-Type', 'text/plain');
    }
}
