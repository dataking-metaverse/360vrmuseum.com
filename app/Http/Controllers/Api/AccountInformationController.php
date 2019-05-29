<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\NotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AccountInformationController extends Controller
{
    public function get(Request $request): JsonResponse {
        $user = auth()->user();
        if (!$user) { throw new NotFoundException(); }
        return static::success($user);
    }
}
