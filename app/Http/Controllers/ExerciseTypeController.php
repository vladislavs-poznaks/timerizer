<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExerciseTypeStoreRequest;
use App\Models\ExerciseType;

class ExerciseTypeController extends Controller
{
    public function store(ExerciseTypeStoreRequest $request)
    {
        ExerciseType::create($request->validated());

//        return redirect(route('workouts.show', $set->workout))
//            ->with('success', 'Exercise created');
    }
}
