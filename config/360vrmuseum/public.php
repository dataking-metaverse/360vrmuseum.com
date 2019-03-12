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
            'featuredExhbitionCarousel' => [
                'qT3himjQVQ2',
                '3MrnWzKigNP',
                'kF3xE8edLEA',
                'sdhXymhVog6',
                'MsECZxmoy9y',
                'aSYdPZg4Mu6',
                'QkPtiaDjLbE',
                'yDEtLE2KrWP',
                'w6M8mr9ArwV',
                'n4ik2CyQRWM',
                '3VzkdUcgjGM',
                '4MbVUmwti9x',
                'z8Gwj4NcTUu',
                'xSPWrtHB4Zd',
                'kkZGik7iLgm',
                'TyFGiCLuof9',
                'aBb76RaccUH',
            ],
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
