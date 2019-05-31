<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;

class ViewHistoryController extends Controller
{
    public function get(Request $request) {
        $user = User::current();
        $mids = $user->getAttribute('view_history');
        if (!$mids) { $mids = []; }
        $viewHistory = ShowcaseController::propIn('mid', $mids);
        return static::success($viewHistory);
    }
}
