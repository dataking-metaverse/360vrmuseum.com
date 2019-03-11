<?php

namespace App\GraphQL\Query;

use App\GraphQL\Type\ShowcaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;


class ShowcaseQuery extends Query
{
    protected $attributes = [
        'name' => 'showcase'
    ];

    public function type()
    {
        return GraphQL::type('Showcase');
    }

    public function args()
    {
        return ShowcaseType::fieldsStatic();
    }

    public function resolve($root, $args)
    {

        $showcases = config('360vrmuseum.showcases');

        $result = array_first($showcases, function($value, $key) use ($args) {
            return $value['mid'] === $args['mid'];
        });

        return $result ?? null;
    }
}
