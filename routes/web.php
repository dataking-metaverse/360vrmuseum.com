<?php

// ================================================================================
//
//    !!! HINT : when you update this file, make sure you check the following file
//
//    /resources/js/Routing/routes.js
//
// ================================================================================

URL::forceRootUrl(config('app.url'));

Route::get('/', 'WebController@home')->name('home');
Route::get('/showcase/{mid}', 'WebController@showcase')->name('showcase');
Route::get('/national-museum', 'WebController@nationalMuseum')->name('national-museum');
Route::get('/360vrmuseum', 'WebController@vrmuseum')->name('vrmuseum');
Route::get('/contact-us', 'WebController@contactUs')->name('contact-us');
Route::get('/privacy-policy', 'WebController@privacyPolicy')->name('privacy-policy');
Route::get('/terms-of-service', 'WebController@termsOfService')->name('terms-of-service');
Route::get('/login', 'WebController@login')->name('login');
Route::get('/search', 'WebController@search')->name('search');


// API : showcase
Route::get('/api/showcase', 'Api\\ShowcaseController@single')->name('api.showcase');
Route::get('/api/showcase/by-presented-by', 'Api\\ShowcaseController@byPresentedBy')->name('api.showcase.by-presented-by');

Route::get('/api/showcases', 'Api\\ShowcaseController@multi')->name('api.showcases');
Route::get('/api/showcases/by-presented-bys', 'Api\\ShowcaseController@byPresentedBys')->name('api.showcases.by-presented-bys');
Route::get('/api/showcases/search', 'Api\\ShowcaseController@search')->name('api.showcases.search');
