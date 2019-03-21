<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\Api\ValidationException;
use App\Mail\ContactFormEmail;
use Cache;
use Validator;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{

    function __construct(Request $request) {
        parent::__construct($request);
        $validation = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'content' => 'required|string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    public function send(Request $request) {
        $mail = new ContactFormEmail([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'subject' => $request->get('subject'),
            'content' => $request->get('content'),
        ]);

        \Mail::to(env('DATAKING_HELP'))
            ->send($mail);

        return responseJson([
            'message' => 'Message is sent',
        ]);
    }
}
