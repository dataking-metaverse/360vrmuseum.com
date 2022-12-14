<?php

// ================================================================================
//
//    !!! HINT : when you update this file, make sure you check the following file
//
//    /resources/js/Routing/routes.js
//
// ================================================================================

URL::forceRootUrl(config('app.url'));

Route::group([
    'prefix' => '/api/auth'
], function () {
    Route::post('login', 'AuthController@login')->name('api.auth.login');
    Route::post('signup', 'AuthController@signup')->name('api.auth.signup');
    Route::get('user', 'AuthController@user')->name('api.auth.user');

    Route::group([
        'middleware' => 'auth'
    ], function() {
        Route::post('logout', 'AuthController@logout')->name('api.auth.logout');
    });
});

Route::get('/', 'WebController@home')->name('home');
Route::get('/showcase/{mid}', 'WebController@showcase')->name('showcase');
Route::get('/national-museum', 'WebController@nationalMuseum')->name('national-museum');
Route::get('/national-museum/{museumName}', 'WebController@nationalMuseum')->name('national-museum.single');
Route::get('/360vrmuseum', 'WebController@vrmuseum')->name('vrmuseum');
Route::get('/contact-us', 'WebController@contactUs')->name('contact-us');
Route::get('/my-account', 'WebController@myAccount')->name('my-account');
Route::get('/privacy-policy', 'WebController@privacyPolicy')->name('privacy-policy');
Route::get('/terms-of-service', 'WebController@termsOfService')->name('terms-of-service');
Route::get('/login', 'WebController@login')->name('login');
Route::get('/signup', 'WebController@signup')->name('signup');
Route::get('/search', 'WebController@search')->name('search');
Route::get('/forgot-password', 'WebController@forgotPassword')->name('forgot-password');
Route::get('/reset-password/{token}', 'WebController@resetPassword')->name('reset-password');

// telescope museum application
Route::get('/telescope', 'TelescopeController@index')->name('telescope');

// API : lang
Route::get('/api/lang', 'Api\\LangController@get')->name('api.lang');

// API : showcase
Route::get('/api/showcase', 'Api\\ShowcaseController@single')->name('api.showcase');
Route::get('/api/showcase/by-presented-by', 'Api\\ShowcaseController@byPresentedBy')->name('api.showcase.by-presented-by');

Route::get('/api/showcases', 'Api\\ShowcaseController@multi')->name('api.showcases');
Route::get('/api/showcases/by-presented-bys', 'Api\\ShowcaseController@byPresentedBys')->name('api.showcases.by-presented-bys');
Route::get('/api/showcases/search', 'Api\\ShowcaseController@search')->name('api.showcases.search');

// API : comment
Route::post('/api/comment', 'Api\\CommentController@post')->name('api.comment.post');
Route::put('/api/comment', 'Api\\CommentController@put');
Route::delete('/api/comment', 'Api\\CommentController@delete');
Route::get('/api/comment/by-showcase', 'Api\\CommentController@byShowcase')->name('api.comment.by-showcase');

// API : contact
Route::post('/api/contact/send', 'Api\\ContactFormController@send')->name('api.contact.send');

// API : password reset
Route::post('/api/password/create', 'Auth\\PasswordResetController@create')->name('password-reset.create');
Route::get('/api/password/find/{token}', 'Auth\\PasswordResetController@find')->name('password-reset.find');
Route::post('/api/password/reset', 'Auth\\PasswordResetController@reset')->name('password-reset.reset');

// API : my account
Route::get('/api/my-account/account-information', 'Api\\AccountInformationController@get')->name('api.my-account.account-information');
Route::post('/api/my-account/account-information', 'Api\\AccountInformationController@post');
Route::get('/api/my-account/view-history', 'Api\\ViewHistoryController@get')->name('api.my-account.view-history');
Route::get('/api/my-account/view-suggestions', 'Api\\ViewSuggestinosController@get')->name('api.my-account.view-suggestions');

Route::get('/sitemap.xml', 'SitemapController@index')->name('sitemap');
Route::get('/robots.txt', 'RobotsController@index')->name('robots');
