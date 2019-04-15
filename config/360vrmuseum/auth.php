<?php

use App\User;


return [

    /**
     * Basically the list of
     */
    'userType' => [

        /**
         * Be a basic user, you should login in, that's it.
         */
        'basic' => function(User $user): bool { return !!$user; },

        /**
         * A curator
         */
        'curators' => function(User $user): bool { return true; },
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
        'viewShowcases' => ['*'],

        /**
         *
         *
         *
         */
        'commenting' => ['curators'],
    ],
];
