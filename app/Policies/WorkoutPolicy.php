<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Auth\Access\HandlesAuthorization;

class WorkoutPolicy
{
    use HandlesAuthorization;

//    /**
//     * Determine whether the user can view any models.
//     *
//     * @return bool
//     */
//    public function viewAny(): bool
//    {
//        return true;
//    }
//
//    /**
//     * Determine whether the user can view the model.
//     *
//     * @param Workout $workout
//     * @return bool
//     */
//    public function view(Workout $workout): bool
//    {
//        return true;
//    }
//
//    /**
//     * Determine whether the user can create models.
//     *
//     * @return bool
//     */
//    public function create(): bool
//    {
//        return true;
//    }

    /**
     * Determine whether the user can update the model.
     *
     * @param Workout $workout
     * @return bool
     */
    public function update(Workout $workout): bool
    {
        return $workout->owner->is(auth()->user());
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param Workout $workout
     * @return bool
     */
    public function delete(Workout $workout): bool
    {
        return $workout->owner->is(auth()->user());
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param Workout $workout
     * @return bool
     */
    public function restore(Workout $workout): bool
    {
        return $workout->owner->is(auth()->user());
    }
}
