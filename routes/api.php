<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::get('getAuthUser', 'UserController@getAuthenticatedUser');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('users', 'UserController@index');
    Route::resource('categories', 'CategoryController');
    Route::resource('posts', 'PostController');

});


