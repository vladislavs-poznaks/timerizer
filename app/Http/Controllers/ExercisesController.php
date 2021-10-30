<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExerciseStoreRequest;
use App\Models\Set;

class ExercisesController extends Controller
{
    public function store(ExerciseStoreRequest $request, Set $set)
    {
        $set->exercises()->create($request->validated());

        return redirect(route('workouts.show', $set->workout))
            ->with('success', 'Exercise created');
    }
}
