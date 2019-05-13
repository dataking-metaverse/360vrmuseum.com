<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TelescopeController extends Controller
{
    public function index(Request $request) {
        return view('telescope');
    }
}
