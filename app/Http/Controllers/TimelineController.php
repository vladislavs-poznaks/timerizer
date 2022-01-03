<?php

namespace App\Http\Controllers;


use App\Constants\SetDictionaries;
use App\Http\Requests\WorkoutStoreRequest;
use App\Http\Requests\WorkoutUpdateRequest;
use App\Http\Resources\DefinitionCollection;
use App\Http\Resources\ExerciseTypeCollection;
use App\Http\Resources\WorkoutCollection;
use App\Http\Resources\WorkoutResource;
use App\Models\Definition;
use App\Models\ExerciseType;
use App\Models\Workout;
use Illuminate\Database\Eloquent\Builder;

class TimelineController extends Controller
{
    public function index()
    {
        return inertia('Timeline/Index', [
            'workouts' => new WorkoutCollection(auth()->user()->timeline())
        ]);
    }

    public function show(Workout $workout)
    {
        $setTypes = new DefinitionCollection(Definition::inDictionary(SetDictionaries::TYPE)->orderBy('value')->get());

        $filters = request()->only('type');

        return inertia('Timeline/Show', [
            'workout' => new WorkoutResource($workout),
            'setTypes' => $setTypes,
            'exerciseTypes' => new ExerciseTypeCollection(ExerciseType::all())
        ]);
    }
}
