import React from 'react'
import {Link, useForm} from "@inertiajs/inertia-react";
import {TrashIcon} from "@heroicons/react/outline";
import TableButton from "../../Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";
import Badge from "../../Shared/Components/Badge";

const WorkoutRow = ({workout}) => {

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
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <TableButton color="red" type="button" onClick={(e) => handleSubmit(e)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default WorkoutRow;
