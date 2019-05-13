<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\ShowcaseController;
use Illuminate\Http\Request;

class TelescopeController extends Controller
{
    public function index(Request $request) {
        $presentedBys = config('360vrmuseum.public.pages.nationalMuseum.exhibitionGroups');
        $showcasesGroups = collect(ShowcaseController::propIn('presented_by', $presentedBys))->groupBy('presented_by');
        return view('telescope', [
            'preloadedState' => json_encode((object)[
                'showcases' => $showcasesGroups,
            ]),
        ]);
    }
}
