<?php

use App\Http\Controllers\ExercisesController;
use App\Http\Controllers\ExerciseTypeController;
use App\Http\Controllers\SetsController;
use App\Http\Controllers\WorkoutsController;
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

Route::group([
    'middleware' => 'auth'
], function () {

    Route::get('workouts', [WorkoutsController::class, 'index'])
        ->name('workouts.index');
    Route::get('workouts/create', [WorkoutsController::class, 'create'])
        ->name('workouts.create');

    Route::get('workouts/{workout}', [WorkoutsController::class, 'show'])
        ->name('workouts.show');
    Route::post('workouts', [WorkoutsController::class, 'store'])
        ->name('workouts.store');
    Route::get('workouts/{workout}/edit', [WorkoutsController::class, 'edit'])
        ->middleware('can:update,workout')
        ->name('workouts.edit');
    Route::put('workouts/{workout}', [WorkoutsController::class, 'update'])
        ->middleware('can:update,workout')
        ->name('workouts.update');
    Route::delete('workouts/{workout}', [WorkoutsController::class, 'destroy'])
        ->middleware('can:delete,workout')
        ->name('workouts.delete');

    Route::post('workouts/{workout}/sets', [SetsController::class, 'store'])
        ->name('sets.store');
    Route::put('workouts/sets/{set}', [SetsController::class, 'update'])
        ->name('sets.update');

    Route::post('workouts/sets/exercise-types', [ExerciseTypeController::class, 'store'])
        ->name('exercise-types.store');

    Route::post('workouts/sets/{set}/exercises', [ExercisesController::class, 'store'])
        ->name('exercises.store');
    Route::put('workouts/sets/exercises/{exercise}', [ExercisesController::class, 'update'])
        ->name('exercises.update');
});

require __DIR__.'/auth.php';
