<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Mail\ResetPasswordMail;


Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink' , 'PasswordController@sendEmail' );
    Route::post('resetPassword' , 'PasswordController@resetPassword' );


});