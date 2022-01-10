<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExerciseStoreRequest;
use App\Models\Exercise;
use App\Models\Set;

class ExercisesController extends Controller
{
    public function store(ExerciseStoreRequest $request, Set $set)
    {
        $set->exercises()->create($request->validated());

        return redirect(route('workouts.show', $set->workout))
            ->with('success', 'Exercise created');
    }

    public function destroy(Exercise $exercise)
    {
        $exercise->delete();

        return redirect()->back();
    }
}
