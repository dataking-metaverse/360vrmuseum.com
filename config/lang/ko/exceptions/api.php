<?php

use \App\Exceptions\Api\MissingParameterException;
use \App\Exceptions\Api\NotFoundException;
use \App\Exceptions\Api\ValidationException;
use \App\Exceptions\Api\WrongCredentialException;
use \App\Exceptions\Api\UnauthorizedException;

return [
    md5(MissingParameterException::class) => 'Parameter is missing: {param}',
    md5(NotFoundException::class) => 'The requested resource cannot be found',
    md5(ValidationException::class) => 'Validation failed',
    md5(WrongCredentialException::class) => 'Credential doesn\'t match.',
    md5(UnauthorizedException::class) => 'Unauthorized. Please login to view this content.',
];

