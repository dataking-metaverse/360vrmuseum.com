<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;


class ModelsQuery extends Query
{
    protected $attributes = [
        'name' => 'model'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Model'));
    }

    public function args()
    {
        return [
            '_id' => ['name' => '_id', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()]
        ];
    }

    public function resolve($root, $args)
    {
        if (isset($args['_id'])) {
            return [
                [
                    '_id' => '12543567u2384578348957',
                    'email' => 'winghim@dataking.co.kr',
                ]
            ];
        } else if(isset($args['email'])) {
            return [
                [
                    '_id' => '12543567u2384578348957',
                    'email' => 'winghim@dataking.co.kr',
                ]
            ];
        } else {
            return [
                [
                    '_id' => '12543567u2384578348957',
                    'email' => 'winghim@dataking.co.kr',
                ]
            ];
        }
    }
}
