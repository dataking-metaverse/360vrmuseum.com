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
//        dd($args);

        $showcases = config('360vrmuseum.showcases');

        $result = array_first($showcases, function($value, $key) use ($args) {
            return $value['mid'] === $args['mid'];
        });

        return [$result] ?? $showcases;
    }
}
