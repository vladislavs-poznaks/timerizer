import React from 'react'
import {Link} from "@inertiajs/inertia-react";
import {PencilAltIcon, TrashIcon} from "@heroicons/react/outline";
import TableButton from "../../Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";
import Badge from "../../Shared/Components/Badge";

const WorkoutRow = ({workout, setEditWorkout, setWorkout}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (confirm("Sure?")) {
            Inertia.delete(route('workouts.delete', workout.id))
        }
    }

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
                <TableButton type="button" onClick={() => {
                    setEditWorkout(true)
                    setWorkout(workout)
                }}>
                    <PencilAltIcon className="w-5 h-5"/>
                </TableButton>
                <TableButton type="button" onClick={(e) => handleSubmit(e)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default WorkoutRow;
