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

class WorkoutsController extends Controller
{
    public function index()
    {
        return inertia('Workouts/Index', [
            'workouts' => new WorkoutCollection(auth()->user()->workouts()->paginate(10)->withQueryString())
        ]);
    }

    public function show(Workout $workout)
    {
        $setTypes = new DefinitionCollection(Definition::inDictionary(SetDictionaries::TYPE)->orderBy('value')->get());

        $filters = request()->only('type');

        return inertia('Workouts/Show', [
            'workout' => new WorkoutResource($workout),
            'setTypes' => $setTypes,
            'exerciseTypes' => new ExerciseTypeCollection(ExerciseType::all())
        ]);
    }

    public function store(WorkoutStoreRequest $request)
    {
        auth()->user()->workouts()->create($request->validated());

        return redirect()
            ->back();
    }

    public function update(WorkoutUpdateRequest $request, Workout $workout)
    {
        $workout->update($request->validated());

        return redirect()
            ->back()
            ->with('success', 'Workout updated!');
    }

    public function destroy(Workout $workout)
    {
        $workout->delete();

        return redirect()->back();
    }
}
