<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\NotFoundException;
use App\Exceptions\Api\ValidationException;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class AccountInformationController extends Controller
{
    public static function currentUser(): User {
        $user = auth()->user();
        if (!$user) { throw new NotFoundException(); }
        return $user;
    }

    public function __constructor(Request $request) {
        $validation = Validator::make($request->all(), [
            'locale' => 'required|string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    public function get(Request $request): JsonResponse {
        $user = static::currentUser();
        return static::success($user);
    }

    public function post(Request $request): JsonResponse {
        $user = static::currentUser();
        $email = $this->requireParam('email');
        $job = $this->requireParam('job');
        $phone = $this->requireParam('phone');

        // update the record
        $user->setAttribute('email', $email);
        $user->setAttribute('job', $job);
        $user->setAttribute('phone', $phone);
        $user->save();

        return static::response([
            'message' => config('lang.ko.pages.my-account.messages.submitted'),
        ]);
    }

}
