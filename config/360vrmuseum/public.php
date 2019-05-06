<?php


return [

    'appBase' => env('APP_URL'),

    'defaultMeta' => [
        'title' => '360°VR Museum',
        'description' => 'Next-generation museum - 360°VR Museum',
        'keywords' => 'vrmuseum, dataking, vr, museum, 360, bideomap, national museum, 국립박물관, 박물관, 데이터킹',
        'url' => env('APP_URL'),
        'image' => env('APP_URL') . '/og-logo.png',
        'imageWidth' => '113',
        'imageHeight' => '42',
    ],

    'navigationBar' => [
        'showHome' => true,
        'showAuth' => true,
        'staticItems' => [
            'home',
            'national-museum',
            'vrmuseum',
            'contact-us',
        ],
        'login' => 'login',
        'logout' => 'logout',
    ],

    'pages' => [
        'home' => [
            'heroCarousel' => [
                'showcases' => [
                    '3VzkdUcgjGM',
                    'UarDva3g6pX',
                    'MsECZxmoy9y',
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
            'permanentExhibition' => [
                'QkPtiaDjLbE', 'ft1emFLvBQA', 'BNTTf85YsMP', 'iPhH5vffSTt', 'RM2QnvzmjA3',
                'B6UCtGFBjsf', '2Kh3PgoqoDT', 'Xr48H9yMjcp', 'rkDggYgt6LV', 'UarDva3g6pX',
                'P4L5PqEWNrS', 'w9vxL98X4Fd',
            ],
        ],
        'showcase' => [
            'comments' => [
                'wordLimit' => 100,
            ],
        ],
        'nationalMuseum' => [
            'exhibitionGroups' => [
                '국립중앙박물관',
                '국립공주박물관',
                '국립춘천박물관',
                '국립나주박물관',
                '국립대구박물관',
                '국립김해박물관',
                '국립전주박물관',
                '국립부여박물관',
                '국립미륵사지유물전시관',
                '국립제주박물관',
                '국립진주박물관',
                '국립경주박물관',
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

    /**
     * privileges
     *
     * All the values under the assoc 'privileges' should be key => value pairs, and the values should all be arrays.
     *
     * If you put an asterisk ('*'), that means the functionality is OPEN FOR EVERYONE EVEN THEY DON"T LOGIN.
     */
    'privileges' => [

        /**
         * I think usually this will only be either of below:
         *
         *  - ['curators'] // (curators only)
         *  - ['basic'] // (accessable by all kinds of users who has login)
         *  - ['*'] // (accessable by everyone, regardless if he has logged in or not)
         */
//        'viewShowcases' => ['basic'], // enable this line when you need to restrict
        'viewShowcases' => ['*'], // enable this line to enable showcase to everyone

        /**
         * TODO : please rewrite this comment block after it logic is actually applied
         * The comment section is restricted to logged in users only (so never put ['*'] as the value!)
         */
        'writeComments' => ['curators'],
        'readComments' => ['curators'],
//        'writeComments' => ['*'],
//        'readComments' => ['*'],
    ],

    /**
     * Recaptcha
     */
    'recaptcha' => [
        'siteKey' => env('RECAPTCHA_SITE_KEY', ''),
    ],

];
