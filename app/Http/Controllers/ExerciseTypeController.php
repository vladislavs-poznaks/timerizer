<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExerciseTypeStoreRequest;
use App\Http\Resources\ExerciseTypeCollection;
use App\Models\ExerciseType;
use Illuminate\Support\Facades\Auth;

class ExerciseTypeController extends Controller
{
    public function store(ExerciseTypeStoreRequest $request)
    {
        $attributes = array_merge($request->validated(), [
            'user_id' => Auth::user()->getAuthIdentifier()
        ]);

        $exerciseType = ExerciseType::create($attributes);

        // TODO Redirect?!
        return redirect()->back();
    }

    public function api()
    {
        return new ExerciseTypeCollection(ExerciseType::filter(request())->get());
    }
}
