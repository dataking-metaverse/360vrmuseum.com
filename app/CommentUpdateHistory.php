<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentUpdateHistory extends Model
{
    protected $fillable = [ 'comment_id', 'old_content' ];

    static function byComment(Comment $comment): Comment {
        $commentId = $comment->id;
        $oldContent = $comment->old_content;
        return static::create([
            'comment_id' => $commentId,
            'old_content' => $oldContent,
        ]);
    }
}
