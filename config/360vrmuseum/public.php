<?php


return [

    'appBase' => env('APP_URL'),

    'navigationBar' => [
        'showHome' => true,
        'staticItems' => [
            'home',
            'national-museum',
            'vrmuseum',
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
                'qT3himjQVQ2', '3MrnWzKigNP', 'kF3xE8edLEA', 'sdhXymhVog6', 'MsECZxmoy9y',
                'aSYdPZg4Mu6', 'QkPtiaDjLbE', 'yDEtLE2KrWP', 'w6M8mr9ArwV', 'n4ik2CyQRWM',
                '3VzkdUcgjGM', '4MbVUmwti9x', 'z8Gwj4NcTUu', 'xSPWrtHB4Zd', 'kkZGik7iLgm',
                'TyFGiCLuof9', 'aBb76RaccUH',
            ],
            'specialExhibition' => [
                'qT3himjQVQ2', 'MsECZxmoy9y', 'aBb76RaccUH', 'xSPWrtHB4Zd', 'z8Gwj4NcTUu',
                'TyFGiCLuof9', '4MbVUmwti9x', 'kcWsN7tZAXm', '3MrnWzKigNP', 'sdhXymhVog6',
                'avWhh5K7Nop', 'kF3xE8edLEA', 'kkZGik7iLgm', 'o1ZhcnK9swd', 'V5jZZqo5CZg',
                'w6M8mr9ArwV', 'aSYdPZg4Mu6', 'yDEtLE2KrWP', 'n4ik2CyQRWM', '3VzkdUcgjGM',
                'CQVuaEc2Ug5',
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
