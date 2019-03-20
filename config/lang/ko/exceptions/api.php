<?php

use \App\Exceptions\Api\MissingParameterException;
use \App\Exceptions\Api\NotFoundException;
use \App\Exceptions\Api\ValidationException;
use \App\Exceptions\Api\WrongCredentialException;

return [
    MissingParameterException::class => 'Parameter is missing: {param}',
    NotFoundException::class => 'The requested resource cannot be found',
    ValidationException::class => 'Validation failed',
    WrongCredentialException::class => 'Credential doesn\'t match.',
];

