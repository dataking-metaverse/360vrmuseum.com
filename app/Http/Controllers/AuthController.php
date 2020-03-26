<?php

namespace App\Http\Controllers;

use App\Exceptions\Api\DuplicatedEmailException;
use App\Exceptions\Api\DuplicatedNameException;
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
            'types' => $user->types ?? null,
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
        $validation = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed',
            'phone' => 'required|string',
            'job' => 'required|string',
            'accept_terms' => 'required|accepted',
            'recaptcha_token' => 'required|recaptcha',
        ]);
        if ($validation->fails()) { throw new ValidationException($validation); }

        // check if email or name is repeated. The error showing should be different and customized.
        // 1. email
        if (User::where(['email' => $request->email])->first()) {
            throw new DuplicatedEmailException($request->email);
        }
        // 2. name
        if (User::where(['name' => $request->name])->first()) {
            throw new DuplicatedNameException($request->name);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'job' => $request->job,
            'password' => bcrypt($request->password),
            'view_history' => [],
        ]);
        $user->save();
        return responseJson([
            'redirect' => route('login', null, false),
            'message' => config('lang.ko.notifications.createdUser'),
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

        // If the user is using username instead of email to login, still going.
		$email = $request->get("email");
		$password = $request->get("password");
		$user = User::where(["name" => $email])->first();
        if ($user) { $email = $user->email; }

        $validation = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($validation->fails()) { throw new ValidationException($validation); }

        if(!Auth::attempt(["email" => $email, "password" => $password], !!$request->remember_me)) {
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
            'message' => config('lang.ko.notifications.logoutMessage'),
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
