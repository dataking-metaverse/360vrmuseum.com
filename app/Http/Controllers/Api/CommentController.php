<?php

namespace App\Http\Controllers\Api;

use App\AdminMongoDB\ModelLoadHistory;
use App\AdminMongoDB\ModelPlayHistory;
use App\Comment;
use App\Exceptions\Api\ValidationException;
use Cache;
use Validator;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    function __construct(Request $request) {
        parent::__construct($request);
        $validation = Validator::make($request->all(), [
            'mid' => ShowcaseController::VALIDATE_MID,
            'content' => 'string',
        ]);
        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

    function byShowcase(Request $request) {
        $mid = $this->requireParam('mid');
        $comments = Comment::with(['user'])
            ->where(['mid' => $mid])
            ->orderBy('id', 'DESC')->get();
        return self::success($comments);
    }

    function post(Request $request) {
        $user = requireUser();
        $mid = $this->requireParam('mid');
        $content = $this->requireParam('content');
        $comment = Comment::create([
            'user_id' => $user->id,
            'mid' => $mid,
            'parent_id' => null,
            'content' => $content,
            'subscribe' => false,
        ]);
        return responseJson([
            'message' => 'Comment submitted',
            'data' => $comment,
        ]);
    }
}