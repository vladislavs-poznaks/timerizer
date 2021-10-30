<?php

namespace App\Http\Controllers;


use App\Constants\SetDictionaries;
use App\Http\Requests\WorkoutStoreRequest;
use App\Http\Resources\DefinitionCollection;
use App\Http\Resources\SetCollection;
use App\Http\Resources\WorkoutCollection;
use App\Http\Resources\WorkoutResource;
use App\Models\Definition;
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
        $setTypes = new DefinitionCollection(Definition::inDictionary(SetDictionaries::TYPE)->orderBy('value')->get());

        return inertia('Workouts/Show', [
            'workout' => new WorkoutResource($workout),
            'setTypes' => $setTypes
        ]);
    }

    public function create()
    {
        return inertia('Workouts/Create');
    }

    public function store(WorkoutStoreRequest $request)
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
