<?php


return [
    'meta' => [
        'title' => 'Signup - 360VRMuseum',
    ],
    'signupForm' => [
        'email' => '이메일 주소',
        'name' => '이름',
        'password' => 'Password (8 ~16 글자이상 문자, 숫자 포함)',
        'confirmPassword' => 'Confirm Password (8 ~16 글자이상 문자, 숫자 포함)',
        'phone' => '휴대폰번호',
        'job' => '직업',
        'login' => '로그인',
        'terms' => '약관',
        'agreeTerms' => '{termsLink} 및 이메일 수신 동의',
        'signup' => '회원가입',
        'jobOptions' => [
            'professor' => '교수',
            'curator' => '학예사',
            'researcher' => '연구원',
            'student' => '학생',
            'lecturer' => '강사',
            'publicServant' => '공무원',
            'teacher' => '교사',
            'others' => '일반회원(기타)',
        ],
    ],
    'successMessage' => 'Successfully created user!',
];
