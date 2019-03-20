<?php


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
