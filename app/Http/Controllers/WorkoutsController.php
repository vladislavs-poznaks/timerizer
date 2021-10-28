<?php

namespace App\Http\Controllers;


use App\Http\Requests\WorkoutCreateRequest;
use App\Http\Resources\WorkoutCollection;
use App\Http\Resources\WorkoutResource;
use App\Models\Workout;

class WorkoutsController extends Controller
{
    public function index()
    {
        return inertia('Workouts/Index', [
            'workouts' => new WorkoutCollection(auth()->user()->workouts)
        ]);
    }

    public function show(Workout $workout)
    {
        return inertia('Workouts/Show', [
            'workout' => new WorkoutResource($workout)
        ]);
    }

    public function create()
    {
        return inertia('Workouts/Create');
    }

    public function store(WorkoutCreateRequest $request)
    {
        auth()->user()->workouts()->create($request->validated());

        return redirect(route('workouts.index'))
            ->with('success', 'Workout created');
    }

    public function edit()
    {
        return inertia('Workouts/Edit');
    }

    public function update()
    {

    }
}
