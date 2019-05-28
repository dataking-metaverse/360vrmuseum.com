<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;

class MyAccountController extends Controller
{
    public function get(Request $request)
    {
        $mids = User::mongoUserApply('getAttribute', 'view_history');
        if (!$mids) {
            $mids = [];
        }
        $viewHistory = ShowcaseController::propIn('mid', $mids);
        return static::success($viewHistory);
    }
}
