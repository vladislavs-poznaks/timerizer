import React from 'react'
import {Link} from "@inertiajs/inertia-react";

const WorkoutCard = ({workout}) => {
    return (
        <div className="shadow-lg rounded-2xl px-10 py-4 bg-white dark:bg-gray-700 w-full space-y-2">
            <div className="flex items-center justify-between items-center">
                <Link href={route('workouts.show', {workout: workout.id})}>
                    <div>{workout.title}</div>
                </Link>
                <div
                    className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                >
                    {workout.public ? 'Public' : 'Private'}
                </div>
            </div>
            <div>
                {workout.description}
            </div>
        </div>
    )
}

export default WorkoutCard;
