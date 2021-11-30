<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExerciseTypeStoreRequest;
use App\Http\Resources\ExerciseTypeCollection;
use App\Models\ExerciseType;
use Illuminate\Http\Request;

class ExerciseTypeController extends Controller
{
    public function store(ExerciseTypeStoreRequest $request)
    {
        ExerciseType::create($request->validated());

        // TODO Redirect?!
    }

    public function api()
    {
        return new ExerciseTypeCollection(ExerciseType::filter(request())->get());
    }
}
