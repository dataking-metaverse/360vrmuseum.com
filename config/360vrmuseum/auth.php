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
];
