<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LangController extends Controller
{
    public function lang(Request $request, string $locale) {
        $lang = config("lang.{$locale}");
        if (!$lang) { $lang = config('lang.en'); }
        return response()->json($lang);
    }
}
