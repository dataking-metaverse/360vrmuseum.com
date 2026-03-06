<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentUpdateHistory extends Model
{
    protected $fillable = [ 'comment_id', 'old_content' ];

    static function byComment(Comment $comment): self {
        $commentId = $comment->id;
        $oldContent = $comment->content;
        return static::create([
            'comment_id' => $commentId,
            'old_content' => $oldContent,
        ]);
    }
}
