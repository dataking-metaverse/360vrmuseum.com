<?php

return [
    'navigation' => [
        'home' => ['title' => 'Home'],
        'national-museum' => ['title' => 'National Museum'],
        '360vrmuseum' => ['title' => '360°VR Museum'],
        'contact-us' => ['title' => 'Contact Us'],
        'login' => ['title' => 'Login'],
    ],
    'pages' => [
        'home' => [
            'heroCarousel' => [
                'linkText' => '바로보기',
                'slide' => [
                    [
                        'background' => 'https://placehold.it/1920x600',
                        'title' => 'Next-generation museum 360 VRMuseum',
                        'subtitle' => '',
                        'link' => '#',
                    ],
                    [
                        'background' => 'https://placehold.it/1920x600',
                        'title' => '갈 수 있는 것을 더 가까이',
                        'subtitle' => 'VR속에 담긴 감성을 더 가깝게 만날 차례입니다.',
                        'link' => '#',
                    ],
                    [
                        'background' => 'https://placehold.it/1920x600',
                        'title' => '볼 수 있는 것을 더 새롭게',
                        'subtitle' => '새롭게 만나는 뮤지엄의 인상을 기대해보세요.',
                        'link' => '#',
                    ],
                ],
            ],
        ],
        'vrmuseum' => [
            'hero' => [
                'title' => '360°VR Museum',
                'subtitle' => '국내외 모든 전시를 PC와 모바일에서 풀 HD로 감상이 가능한 가상 전시 관람 서비스 플랫폼입니다. <br />시간과 장소에 구애받지 않고 언제 어디서나 자유롭게 전시를 관람해보세요.',
            ],
            'introEasy' => [
                'title' => '박물관 가기<br />너무 쉬워졌다',
                'intro' => '360°VR Museum은 기다림이 필요없습니다. 반려견과 함께 전시를 보고, 친구와 전시를 보며 자유롭게 토론해보세요. 이 모든 건 360°VR Museum에서 가능한 일입니다. ',
            ],
            'introSharing' => [
                'title' => '전시를 <br />메시지로 주고받다',
                'intro' => '360°VR Museum은 기다림이 필요없습니다. 반려견과 함께 전시를 보고, 친구와 전시를 보며 자유롭게 토론해보세요. 이 모든 건 360°VR Museum에서 가능한 일입니다. ',
                'graph' => [
                    'comparee' => [
                        'title' => '오프라인 박물관 연간 방문객',
                        'percentage' => .57,
                    ],
                    'comparer' => [
                        'title' => '360°VR Museum 연간 방문객',
                        'percentage' => .92,
                    ],
                ],
            ],
            '' => [
                'title' => '감상의 틀을 깨다',
                'intro' => '시간과 공간에 제약이 없이 360°VR Museum 전시를 관람해보세요. 전시 기간이 끝나 놓친 전시, 두번 봐야하는 명작 전시, 사진이나 동영상으로 저장하고 싶었던 전시들을 모두 모아 PC와 모바일에 담았습니다. 지금은 360°VR Museum을 방문할 타임입니다.',

            ]
        ],
    ],
];
