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
        return [
            'mid' => [ 'name' => 'mid', 'type' => Type::string() ],
            'mids' => [ 'name' => 'mids', 'rules' => [], 'type' => Type::listOf(Type::string()) ],
            'main_title' => [ 'name' => 'main_title', 'type' => Type::string() ],
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

    public function resolve($root, $args)
    {
        if (isset($args['mids']) && is_array($args['mids'])) {
            $mids = $args['mids'];
            return array_where(config('360vrmuseum.showcases'), function($value, $key) use ($mids) {
                return in_array($value['mid'], $mids);
            });
        }
        if (isset($args['mid']) && is_string($args['mid'])) {
            $mid = $args['mid'];
            return array_where(config('360vrmuseum.showcases'), function($value, $key) use ($mid) {
                return $value['mid'] === $mid;
            });
        }
        return [];
    }
}
