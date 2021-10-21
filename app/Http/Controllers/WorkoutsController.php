<?php

namespace App\Http\Controllers;


class WorkoutsController extends Controller
{
    public function index()
    {
        return inertia('Workouts/Index', [
            'workouts' => auth()->user()->workouts
        ]);
    }
}
