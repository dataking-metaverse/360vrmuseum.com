<?php


function responseJson($options) {
    return response()->json(array_merge([
        'status' => 200,
        'success' => true,
        'message' => null,
        'messageParams' => [],
        'data' => null,
    ], $options));
}

function successJson($data) {
    return response(['data' => $data]);
}

function abortJson($status) {
    switch(intval($status)) {
        case 404: throw new \App\Exceptions\Api\NotFoundException();
        default:
            throw new \App\Exceptions\Api\Exception();
    }
}
