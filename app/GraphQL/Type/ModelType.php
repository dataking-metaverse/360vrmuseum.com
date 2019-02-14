<?php

namespace App\GraphQL\Type;


use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class ModelType extends GraphQLType {

    protected $attributes = [
        'name' => 'Model',
        'description' => 'Model'
    ];

    public function fields() {
        return [
            '_id' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of the model'
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of the model'
            ],
        ];
    }

//    // If you want to resolve the field yourself, you can declare a method
//    // with the following format resolve[FIELD_NAME]Field()
//    protected function resolveEmailField($root, $args)
//    {
//        return strtolower($root->email);
//    }

}
