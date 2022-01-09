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

    public function update(SetStoreRequest $request, Set $set)
    {
        $set->update($request->validated());

        return redirect(route('workouts.show', $set->workout))
            ->with('success', 'Set created');
    }

    public function destroy(Set $set)
    {
        $set->delete();

        return redirect()->back();
    }
}
