<?php

namespace App\Http\Controllers;

use App\Exceptions\Api\ValidationException;
use App\Exceptions\Api\WrongCredentialException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Validator;

class AuthController extends Controller {

    public static function userFields() {
        $user = request()->user();
        return $user ? [
            'name' => $user->name ?? null,
            'email' => $user->email ?? null,
        ] : null;
    }

    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'phone' => 'required|string',
            'job' => 'required|string',
            'accept_terms' => 'required|accepted',
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'meta' => [
                $request->phone,
                $request->job,
            ],
        ]);
        $user->save();
        return responseJson([
            'redirect' => route('login', null, false),
            'message' => 'Successfully created user!',
        ]);
    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request) {

        $validation = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($validation->fails()) {
            throw new ValidationException($validation);
        }

        $credentials = request(['email', 'password']);

        if(!Auth::attempt($credentials, !!$request->remember_me)) {
            throw new WrongCredentialException();
        }

        return responseJson([
            'redirect' => route('home', null, false),
            'data' => static::userFields(),
        ]);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        Auth::logout();
        return responseJson([
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request) {
        return successJson(static::userFields());
    }
}
