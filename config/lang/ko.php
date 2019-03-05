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
                'slides' => [
                    [
                        'title' => 'Next-generation museum 360 VRMuseum',
                        'subtitle' => '',
                        'link' => '#',
                    ],
                    [
                        'title' => '갈 수 있는 것을 더 가까이',
                        'subtitle' => 'VR속에 담긴 감성을 더 가깝게 만날 차례입니다.',
                        'link' => '#',
                    ],
                    [
                        'title' => '볼 수 있는 것을 더 새롭게',
                        'subtitle' => '새롭게 만나는 뮤지엄의 인상을 기대해보세요.',
                        'link' => '#',
                    ],
                ],
            ],
        ],
        'vrmuseum' => [
            'meta' => [
                'title' => '360°VR Museum',
                'description' => '360°VR Museum 360°VR Museum 국내외 모든 전시를 PC와 모바일에서 풀 …',
                'image' => env('APP_URL') . '/images/meta/33p-1.png',
                'type' => 'article',
            ],
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
                'percentageBars' => [
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
            'appreciate' => [
                'title' => '감상의 틀을 깨다',
                'intro' => '시간과 공간에 제약이 없이 360°VR Museum 전시를 관람해보세요. 전시 기간이 끝나 놓친 전시, 두번 봐야하는 명작 전시, 사진이나 동영상으로 저장하고 싶었던 전시들을 모두 모아 PC와 모바일에 담았습니다. 지금은 360°VR Museum을 방문할 타임입니다.',
            ],
            'benefits' => [
                [
                    'title' => '하이라이트',
                    'description' => '재생 버튼을 누르면 미리 지정한 하이라이트 스팟으로만 이동하는 기능입니다.',
                ],
                [
                    'title' => '모션태깅',
                    'description' => '원하는 부분에 사진, 글, 동영상을 삽입하여 전달하고자 하는 부분을 더욱 강조할 수 있습니다.',
                ],
                [
                    'title' => '3D Explore',
                    'description' => '상하좌우, 천정 및 바닥으로 이동이 가능하고 360도의 스펙타클한 화각을 감상할 수 있습니다.',
                ],
                [
                    'title' => '360 미니어쳐',
                    'description' => 'Dollhouse는 360도 모형으로 회전할 수 있고  Floor Plan은  평면 도면의 형태를 제공합니다.',
                ],
            ],
            'discover' => [
                'title' => '다르게 보는<br />새로움을 발견하다',
                'cases' => [
                    [
                        'title' => 'Mobile',
                        'description' => '손가락으로 화면을 터치하여 공간을 이동합니다. 화면에 나타나는 파란색  원를 누르면 태깅에 대한 자세한 정보가 나타납니다.',
                    ],
                    [
                        'title' => 'Cardboard',
                        'description' => 'VR 시선추적모드를 활용하여 공간을 이동합니다. 고개를 좌우상하로 움직여 파란색 원 위에 흰 원을 포개면 이동하게 됩니다.',
                    ],
                    [
                        'title' => 'Samsung hmd odyssey',
                        'description' => 'Microsoft Edge 아이콘이 나타나면서 가상 박물관으로 이동합니다. 화면에 나타난 파란색 원을 모션 컨트롤러를 이용하여 맞추면 원하는 장소로 이동합니다.',
                    ],
                ],
            ],
            'artEducation' => [
                'title' => '미술 교육에 <br />혁신을 더하다',
'intro' => '
미술 교육 수업에 혁신을 더해보세요. 학교 안에서 가상 박물관 체험으로 학습의 질을 올리고 학생들의 흥미를 이끌어보세요. 학교 수업이 끝난 후, 360° VR Museum을 통한 교육이 지속될 수 있습니다.
<br /><br />
<strong>
    ” 학생들 스스로 탐구하고 방법을 찾아가는 모습이 아직도 생생합니다.  360° VR Museum 수업은 진행할 때마다 늘 새로운 경험을 안겨줍니다. “
    <small>김진아, 초등학교 미술교사</small>
</strong>
',
            ],
            'culturalData' => [
                'title' => '360° VR Museum 아카이브 <br />문화 데이터에 가치를 높이다',
                'intro' => '매번 전시를 할 때마다 기록해야 할 사진, 동영상 등의 데이터는 늘어만 갑니다. 이제 360°VR Museum으로 그 많은 데이터를 통째로 관리해보세요. 기존 영상과는 차별화되는 스트리트 뷰 이동, 고품질의 해상도, 애니메이션 태깅 기능으로 업무는 더 편리해지고, 홈페이지를 방문한 온라인 방문객들에게 새로운 감상법을 선사합니다.',
            ],
            'pageLinks' => [
                'toMainPage' => '메인으로',
                'toContactPage' => '고객지원',
            ],
        ],
    ],
];















