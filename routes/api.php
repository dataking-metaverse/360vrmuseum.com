<?php


use Illuminate\Http\Request;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

// API : showcase
Route::get('/showcase', 'Api\\ShowcaseController@single')->name('api.showcase');
Route::get('/showcase/by-presented-by', 'Api\\ShowcaseController@byPresentedBy')->name('api.showcase.by-presented-by');

Route::get('/showcases', 'Api\\ShowcaseController@multi')->name('api.showcases');
Route::get('/showcases/by-presented-bys', 'Api\\ShowcaseController@byPresentedBys')->name('api.showcases.by-presented-bys');
Route::get('/showcases/search', 'Api\\ShowcaseController@search')->name('api.showcases.search');
