<?php

use App\Exceptions\Api\UnauthorizedException;
use App\User;

function responseJson(array $options) {
    $data = array_merge([
        'status' => 200,
        'success' => true,
        'message' => null,
        'messageParams' => [],
        'data' => null,
        'errors' => (object)[],
        'redirect' => null,
    ], $options);
    return response()->json($data, $data['status']);
}

function successJson($data, string $message = null, ...$messageParams) {
    return responseJson([
        'data' => $data,
        'message' => $message,
        'messageParams' => $messageParams
    ]);
}

function abortJson($status) {
    switch(intval($status)) {
        case 404: throw new \App\Exceptions\Api\NotFoundException();
        default:
            throw new \App\Exceptions\Api\Exception();
    }
}

function requireUser(): User {
    $user = request()->user();
    if (!$user) {
        throw new UnauthorizedException();
    }
    return $user;
}


function routes($routeNames) {
    return collect(Route::getRoutes())->filter(function($route) use ($routeNames) {
        return isset($route->action['as']) && in_array($route->action['as'], $routeNames);
    })->mapWithKeys(function($route) {
        $url = str_start(str_replace(['{', '}'], [':', ''], $route->uri), '/');
        return [$route->action['as'] => $url];
    });
}
