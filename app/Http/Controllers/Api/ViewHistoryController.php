<?php

namespace App\Http\Controllers\Api;

use App\VRMuseum\ModelSession;
use Illuminate\Http\Request;

class ViewHistoryController extends Controller
{
    public function get(Request $request) {

        return ModelSession::first();
    }
}
