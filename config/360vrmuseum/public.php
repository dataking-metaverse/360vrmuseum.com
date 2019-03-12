<?php


return [

    'appBase' => env('APP_URL'),

    'navigationBar' => [
        'showHome' => true,
        'staticItems' => [
            'home',
            'national-museum',
            '360vrmuseum',
            'contact-us',
            'login',
        ],
    ],

    'pages' => [
        'home' => [
            'heroCarousel' => [
                'slides' => [
                    'https://placehold.it/1920x600',
                    'https://placehold.it/1920x600',
                    'https://placehold.it/1920x600',
                ],
            ],
            'featuredExhibitionCarousel' => [
                ''
            ]
        ],
        'vrmuseum' => [
            'appreciate' => [
                'universityLinks' => [
                    'https://www.kmcu.ac.kr/',
                    'http://museum.sookmyung.ac.kr/',
                    'https://new.syu.ac.kr/',
                ],
            ],
        ],
    ],

];
