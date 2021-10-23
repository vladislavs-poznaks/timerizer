<?php

namespace App\Http\Controllers;


use App\Http\Requests\WorkoutCreateRequest;

class WorkoutsController extends Controller
{
    public function index()
    {
        return inertia('Workouts/Index', [
            'workouts' => auth()->user()->workouts
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
}
