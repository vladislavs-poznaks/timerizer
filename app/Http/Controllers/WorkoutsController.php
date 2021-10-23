<?php

namespace App\Http\Controllers;


use App\Http\Requests\WorkoutCreateRequest;
use App\Http\Resources\WorkoutCollection;

class WorkoutsController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        return inertia('Workouts/Index', [
            'workouts' => WorkoutCollection::collection($user->workouts)
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
