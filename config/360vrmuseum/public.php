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
                'TyFGiCLuof9', 'aBb76RaccUH', "AyXpvFkHzPo", "8vo1vboP9vz", "s7Zcy87gkns",
                "L1TuoKoNakR", "CKBEnmk9CVG", "qPk7yxoRZHP", "6NerCD25MLi", "wDBBzvtMFHZ",
                "b35AU3ctUba", "QcXyw9K7xLD", "kmYoTwSBEJ7", "VVJ1C5AbyjP", "zyXcQFNAoQc",
                "egCpUWDSjug", "NrX8UbPpz3y", "QCNVvQoY3SK",
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
				"ZkdCV6kHtjR", "Zkqgp8oGEMZ", "5ga3YWyfs6N", "Rowya1Az6sQ",
                "GeVm7Q1pgzw", "KtMzVq6Wb2j", "pybatcDP6XN", "xc7dQu8hm8q", "NCB18b761cL",
                "gdiSTbENaWa", "xs4udigpfA4", "QkJcmx9YVkd", "RgeNNi3UhUx", "CxNsvfier2r", 
                "5F4ztyM4xgF", "aTz5QHBiwfY", "tUfbuhe1TNC", "jhSay4aaBpL",
                "6EkPgDXdELu", "5Q8JUsn7idf", "7BEgs7sZTJ6", "GXgCjQ3RKKp", "AgVRR52vm4Z",
                "kr4FhvcJ1FZ", "wtsn1HJMyCi", "DG8kzvoNBfK", "ZXYZZQRDo94",
                "W3yaNnVueif", "SFxGciXpsk1", "NbA9Vo2qdMV", "szqU6gfWcBm", "TJpVtKQobAV",
                "hgpJzGvbKt1", "jnx1iyzcHxP", "GngBPH6CiCa", "b27MkLHNFUf", "HxEfrg4v4Gp",
                "BW9ESm56ipA", "2hwSZh6uCxB", "RVKzQM8KQoY", "Aj7r6hTcGGX", "2wP7SjkTaFv",
                "KYbPtXrfQN1", "ffwBQqzFFtr", "nnw6J5j1aDy", "ZRt3kzpjmeL", "RwunMWz2fCQ"
            ],
            'permanentExhibition' => [
                'QkPtiaDjLbE', 'ft1emFLvBQA', 'BNTTf85YsMP', 'iPhH5vffSTt', 'RM2QnvzmjA3',
                'B6UCtGFBjsf', '2Kh3PgoqoDT', 'Xr48H9yMjcp', 'rkDggYgt6LV', 'UarDva3g6pX',
                'P4L5PqEWNrS', 'w9vxL98X4Fd', '3MxD4FVo6e5', '9tDHv3bWHBt', 'qhS4UkDnpnn',
				'oud3DFwGm9R', 'yKz3BkBb7ob', 'tBQAYUHPuhd', "aFndwV2W5c1", 
                "cTKXFAPi5m5",
                "miZyAxmmwgM", "xwghCfgnXWc", "cRabefs5PvB",
                "RYxozGTokiF", "QQJVtS4dntk", "Msxw5Ro5Rbq", "VaaJmq7mpvQ",
                "zwDCr9d7Hn3", "YD97yZR8T41", 
                "e9bP5KXG3pG", "tNoi3UrSk3j", 
                "wdRybhdBhTR", "Qsv58Bir2md", "qf4TMS7AyEE", "qf4TMS7AyEE", "iXDXBvQaXwT",
                "dRmexZNqo6F", "3kzBfSHbqh7", "4ZrybKMjds7", "HAEF4tkradM", "HAEF4tkradM",
                "NJfe1w1bi8q", "gLeh2gcGdSX", "2RSKTmwiEeU", "bxDm1AxnSmL", "fGpGDyV9XBs",
                "iP2abD2ZcJp", "ZiTw5wTnUs9", "S1xzDTjDsDc", "wTgRH7BaYCm", "o5HpgChzsqP",
                "3ZXKfUyAyTX", "QCNVvQoY3SK", "sN5q8NkNdVP", "muUUxgmr7DT", "LDBS4Xw2Wna",
                "LCnfvFnjEQr", "WdvU2hUi6Hu", "W7A453enU7X", "gAi76oB5H8q", "S7tQsM5wxNn",
                "DmrHB5F6SXT"
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
                '부산근대역사관'
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