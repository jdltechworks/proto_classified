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

// Auth routes
Route::group([
    'namespace' => 'Auth',
    'prefix' => 'auth'
], function() {
    Route::get('', 'IndexController@index')->name('auth.index');
});


Route::resource('product', 'ProductController');

Route::get('/{path?}', 'HomeController@index');
