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
Route::get('/360vrmuseum', 'WebController@vrmuseum')->name('vrmuseum');
Route::get('/contact-us', 'WebController@contactUs')->name('contact-us');
Route::get('/privacy-policy', 'WebController@privacyPolicy')->name('privacy-policy');
Route::get('/terms-of-service', 'WebController@termsOfService')->name('terms-of-service');
Route::get('/login', 'WebController@login')->name('login');
Route::get('/signup', 'WebController@signup')->name('signup');
Route::get('/search', 'WebController@search')->name('search');

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


Route::get('temp', 'WebController@temp');
Route::get('/sitemap.xml', 'SitemapController@index');
