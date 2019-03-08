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
Route::get('/national-museum', 'WebController@nationalMuseum')->name('national-museum');
Route::get('/360vrmuseum', 'WebController@vrmuseum')->name('vrmuseum');
Route::get('/contact-us', 'WebController@contactUs')->name('contact-us');
Route::get('/privacy-policy', 'WebController@contactUs')->name('privacy-policy');
Route::get('/login', 'WebController@login')->name('login');
