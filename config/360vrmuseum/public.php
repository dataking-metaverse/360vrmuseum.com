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
                'CQVuaEc2Ug5', 'QHhwyfbvgQM', 'CKBEnmk9CVG', 'wDBBzvtMFHZ', 'VVJ1C5AbyjP',
                '8vo1vboP9vz', '6NerCD25MLi', 's7Zcy87gkns', 'QcXyw9K7xLD', 'A2G2zXe2a3K',
                'qPk7yxoRZHP', 'AyXpvFkHzPo', 'kmYoTwSBEJ7', 'L1TuoKoNakR', 'zyXcQFNAoQc',
                'UbfZyiAhTQ9', 'V6Hbs5VSd6Y', 'm6w5s2JGZfj', 'egCpUWDSjug', 'NrX8UbPpz3y',
                "GTuNscDGeeJ", "E4XEikvxH28", "ttXr3u6Yep8", "QbvdKVQQAQK", "tdcFoxxNr94",
            ],
            'permanentExhibition' => [
                'QkPtiaDjLbE', 'ft1emFLvBQA', 'BNTTf85YsMP', 'iPhH5vffSTt', 'RM2QnvzmjA3',
                'B6UCtGFBjsf', '2Kh3PgoqoDT', 'Xr48H9yMjcp', 'rkDggYgt6LV', 'UarDva3g6pX',
                'P4L5PqEWNrS', 'w9vxL98X4Fd', '3MxD4FVo6e5', "ZkdCV6kHtjR", '9tDHv3bWHBt',
                'qhS4UkDnpnn', 'oud3DFwGm9R', 'yKz3BkBb7ob', 'tBQAYUHPuhd', "aFndwV2W5c1",
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
                '국립익산박물관',
                '국립제주박물관',
                '국립진주박물관',
                '국립경주박물관',
                '국립청주박물관',
                '국립광주박물관',
                '국립나주박물관',
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
       'viewShowcases' => ['basic'], // enable this line when you need to restrict
        // 'viewShowcases' => ['*'], // enable this line to enable showcase to everyone

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
