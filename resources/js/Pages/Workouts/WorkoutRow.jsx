import React from 'react'
import {Link} from "@inertiajs/inertia-react";
import {PencilAltIcon, TrashIcon} from "@heroicons/react/outline";
import TableButton from "@/Shared/Components/TableButton";
import Badge from "@/Shared/Components/Badge";

const WorkoutRow = ({workout, workoutEditCallback, workoutDeleteCallback}) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <Link href={route('workouts.show', {workout: workout.id})}>
                    <div className="text-sm font-medium text-gray-900">
                        {workout.title}
                    </div>
                </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {workout.description}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <Badge color={workout.public ? 'green' : 'red'}>{workout.public ? 'Public' : 'Private'}</Badge>
            </td>
            <td className="flex justify-center items-center space-x-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <TableButton type="button" onClick={() => workoutEditCallback(workout)}>
                    <PencilAltIcon className="w-5 h-5"/>
                </TableButton>
                <TableButton type="button" onClick={() => workoutDeleteCallback(workout)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default WorkoutRow;
