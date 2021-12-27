<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Auth\Access\HandlesAuthorization;

class WorkoutPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Workout $workout
     * @return bool
     */
    public function update(User $user, Workout $workout): bool
    {
        return $workout->owner->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Workout $workout
     * @return bool
     */
    public function delete(User $user, Workout $workout): bool
    {
        return $workout->owner->is($user);
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
