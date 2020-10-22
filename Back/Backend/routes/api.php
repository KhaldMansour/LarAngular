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
    Route::post('admin/logout', 'AdminController@logout');
    Route::post('admin/refresh', 'AdminController@refresh');
    Route::post('admin/me', 'AdminController@me');
    Route::post('admin/sendPasswordResetLink' , 'AdminPasswordController@sendEmail' );
    Route::post('admin/resetPassword' , 'AdminPasswordController@resetPassword' );


});