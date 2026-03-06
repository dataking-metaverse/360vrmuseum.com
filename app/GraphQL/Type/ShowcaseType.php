<?php

namespace App\GraphQL\Type;


use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class ShowcaseType extends GraphQLType {

    protected $attributes = [
        'name' => 'Showcase',
        'description' => 'Showcase'
    ];

    public static function fieldsStatic() {
        return [
            'mid' => [ 'name' => 'mid', 'type' => Type::string() ],
            'main_title' => [ 'name' => 'main_title', 'type' => Type::string() ],
            'location' => [ 'name' => 'location', 'type' => Type::string() ],
            'presented_by' => [ 'name' => 'presented_by', 'type' => Type::string() ],
            'poster' => [ 'name' => 'poster', 'type' => Type::string() ],
            'thumbnail' => [ 'name' => 'thumbnail', 'type' => Type::string() ],
            'kor_title' => [ 'name' => 'kor_title', 'type' => Type::string() ],
            'eng_title' => [ 'name' => 'eng_title', 'type' => Type::string() ],
            'venue' => [ 'name' => 'venue', 'type' => Type::string() ],
            'map_address' => [ 'name' => 'map_address', 'type' => Type::string() ],
            'map_name' => [ 'name' => 'map_name', 'type' => Type::string() ],
            'description' => [ 'name' => 'description', 'type' => Type::string() ],
            'youtube_id' => [ 'name' => 'youtube_id', 'type' => Type::string() ],
            'list_of_images' => [ 'name' => 'list_of_images', 'type' => Type::listOf(Type::string()) ],
            'guide_information' => [ 'name' => 'guide_information', 'type' => Type::string() ],
            'is_paid' => [ 'name' => 'is_paid', 'type' => Type::string() ],
            'is_conversation' => [ 'name' => 'is_conversation', 'type' => Type::string() ],
            'is_performing' => [ 'name' => 'is_performing', 'type' => Type::string() ],
            'date' => [ 'name' => 'date', 'type' => Type::string() ],
            'type' => [ 'name' => 'type', 'type' => Type::string() ],
            'page_url' => [ 'name' => 'page_url', 'type' => Type::string() ],
        ];
    }

    public function fields() {
        return static::fieldsStatic();
    }
}
