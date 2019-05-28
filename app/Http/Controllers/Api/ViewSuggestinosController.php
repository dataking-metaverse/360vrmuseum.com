<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ViewSuggestinosController extends Controller
{
    /**
     * Randomly picking
     * @param Request $request
     * @return JsonResponse
     */
    public function get(Request $request): JsonResponse {
        $showcases = config('360vrmuseum.showcases');
        $pickedKeys = array_rand($showcases, 10);
        $pickedShowcases = array_filter($showcases, function($index) use ($pickedKeys) { return in_array($index, $pickedKeys); }, ARRAY_FILTER_USE_KEY);
        $pickedShowcases = array_values($pickedShowcases);
        $responseContent = static::success($pickedShowcases);
        return $responseContent;
    }
}
