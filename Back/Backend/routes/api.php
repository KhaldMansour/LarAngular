<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Mail\ResetPasswordMail;


Route::group([
    //User Routes
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink' , 'PasswordController@sendEmail' );
    Route::post('resetPassword' , 'PasswordController@resetPassword' );


});

Route::group([
    //Admin Routes
], function ($router) {

    Route::post('admin/login', 'AdminController@login');
    Route::post('admin/signup', 'AdminController@signup');
    Route::post('logout', 'AdminController@logout');
    Route::post('refresh', 'AdminController@refresh');
    Route::post('me', 'AdminController@me');
    Route::post('sendPasswordResetLink' , 'PasswordController@sendEmail' );
    Route::post('resetPassword' , 'PasswordController@resetPassword' );


});