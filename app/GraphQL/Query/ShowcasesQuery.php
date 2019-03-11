<?php

namespace App\GraphQL\Query;

use App\GraphQL\Type\ShowcaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;


class ShowcasesQuery extends Query
{
    protected $attributes = [
        'name' => 'showcases'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Showcase'));
    }

    public function args()
    {
        return ShowcaseType::fieldsStatic();
    }

    public function resolve($root, $args)
    {
        return array_where(config('360vrmuseum.showcases'), function($value, $key) use ($args) {
            return $value['mid'] === $args['mid'];
        });
    }
}
