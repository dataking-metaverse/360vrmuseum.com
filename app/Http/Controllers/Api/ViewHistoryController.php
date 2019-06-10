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
        $viewHistory = array_map(function($mid) { return ShowcaseController::propEq('mid', $mid); }, $mids);
        return static::success($viewHistory);
    }
}
