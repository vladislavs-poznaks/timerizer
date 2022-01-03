<?php

use App\Http\Controllers\ExercisesController;
use App\Http\Controllers\ExerciseTypeController;
use App\Http\Controllers\SetsController;
use App\Http\Controllers\TimelineController;
use App\Http\Controllers\WorkoutsController;
use Illuminate\Http\Request;
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
    return redirect(\route('timeline.index'));
})->name('home');

Route::group([
    'middleware' => 'auth'
], function () {

    Route::get('timeline', [TimelineController::class, 'index'])
        ->name('timeline.index');
    Route::get('timeline/{workout}', [TimelineController::class, 'show'])
        ->name('timeline.show');

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
    Route::match([Request::METHOD_PUT, Request::METHOD_PATCH],'workouts/{workout}', [WorkoutsController::class, 'update'])
        ->middleware('can:update,workout')
        ->name('workouts.update');
    Route::delete('workouts/{workout}', [WorkoutsController::class, 'destroy'])
        ->middleware('can:delete,workout')
        ->name('workouts.delete');

    Route::get('workouts/sets/exercise-types', [ExerciseTypeController::class, 'index'])
        ->name('exercise-types.index');
    Route::post('workouts/sets/exercise-types', [ExerciseTypeController::class, 'store'])
        ->name('exercise-types.store');
    Route::get('workouts/sets/exercise-types/{exerciseType}', [ExerciseTypeController::class, 'show'])
        ->name('exercise-types.show');
    Route::match([Request::METHOD_PUT, Request::METHOD_PATCH],'workouts/sets/exercise-types/{exerciseType}', [ExerciseTypeController::class, 'update'])
        ->name('exercise-types.update');

    Route::get('workouts/sets/{set}', [SetsController::class, 'show'])
        ->name('sets.show');
    Route::post('workouts/{workout}/sets', [SetsController::class, 'store'])
        ->name('sets.store');
    Route::put('workouts/sets/{set}', [SetsController::class, 'update'])
        ->name('sets.update');
    Route::delete('workouts/sets/{set}', [SetsController::class, 'destroy'])
        ->name('sets.delete');



    Route::delete('workouts/sets/exercise-types/{exerciseType}', [ExerciseTypeController::class, 'destroy'])
        ->name('exercise-types.delete');

    Route::post('workouts/sets/{set}/exercises', [ExercisesController::class, 'store'])
        ->name('exercises.store');
    Route::put('workouts/sets/exercises/{exercise}', [ExercisesController::class, 'update'])
        ->name('exercises.update');
});

require __DIR__.'/auth.php';
