<?php

namespace App\Http\Controllers;

use App\Http\Requests\SetStoreRequest;
use App\Models\Set;
use App\Models\Workout;

class SetsController extends Controller
{
    public function show(Set $set)
    {

    }

    public function store(SetStoreRequest $request, Workout $workout)
    {
        $workout->sets()->create($request->validated());

        return redirect(route('workouts.show', $workout))
            ->with('success', 'Set created');
    }
}
