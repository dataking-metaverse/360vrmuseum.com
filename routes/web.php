<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

URL::forceRootUrl(config('app.url'));

Route::get('/', 'WebController@all')->name('home');
Route::get('/national-museum', 'WebController@all')->name('national-museum');
Route::get('/360vrmuseum', 'WebController@all')->name('vrmuseum');
Route::get('/contact-us', 'WebController@all')->name('contact-us');
Route::get('/login', 'WebController@all')->name('login');
