<?php

use \App\Exceptions\Api\MissingParameterException;
use \App\Exceptions\Api\NotFoundException;
use \App\Exceptions\Api\ValidationException;
use \App\Exceptions\Api\WrongCredentialException;
use \App\Exceptions\Api\UnauthorizedException;
use \App\Exceptions\Api\DuplicatedNameException;
use \App\Exceptions\Api\DuplicatedEmailException;

return [
    md5(MissingParameterException::class) => '{param}을 찾을 수 없습니다.',
    md5(NotFoundException::class) => '요청한 값을 찾을 수 없습니다.',
    md5(ValidationException::class) => '검증실패',
    md5(WrongCredentialException::class) => '정보가 맞지않습니다.',
    md5(UnauthorizedException::class) => '로그인 후 다시 요청하세요.',
    md5(DuplicatedEmailException::class) => '이미 사용중인 이메일입니다. 다른 이메일 주소를 입력해주세요.',
    md5(DuplicatedNameException::class) => '이미 사용중인 이름입니다. 다른 이름 주소를 입력해주세요.',
];
