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
                'description' => '_id',
            ],
            'presented_by' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'presented_by',
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'name',
            ],
            'background_music' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'background_music',
            ],
            'createTime' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'createTime',
            ],
            'm_model' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'm_model',
            ],
            'showcase_image' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'showcase_image',
            ],
            'thumb_image' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'thumb_image',
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
