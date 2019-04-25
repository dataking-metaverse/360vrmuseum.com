<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $fillable = [ 'user_id', 'mid', 'parent_id', 'content', 'subscribe' ];

    protected $casts = [
        'subscribe' => 'boolean',
    ];

    public function user(): Relation {
        return $this->belongsTo(User::class)->select(['id', 'email', 'name']);
    }

}
