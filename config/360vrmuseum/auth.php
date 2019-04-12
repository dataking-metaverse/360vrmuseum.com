<?php


return [
    /**
     * Nothing matters for the rest of this file if this is set to be false.
     */
    'enabled' => true,

    /**
     * Basically the list of
     */
    'userType' => [
        'basic',
        'curators'
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
         *
         * I think usually this will only be either of below:
         *
         *  - ['basic', 'curators']
         *  - ['*']
         *
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
