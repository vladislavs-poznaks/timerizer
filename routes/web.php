<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return inertia('Home');
})->name('home');
Route::get('/settings', function () {
    return inertia('Settings');
})->name('settings');

Route::get('/users', function () {
    return inertia('Users');
})
    ->middleware(['auth'])
    ->name('users');

require __DIR__.'/auth.php';
