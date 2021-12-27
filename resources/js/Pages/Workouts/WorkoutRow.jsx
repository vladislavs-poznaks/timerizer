import React from 'react'
import {Link, useForm} from "@inertiajs/inertia-react";
import {TrashIcon} from "@heroicons/react/outline";
import TableButton from "../../Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";

const WorkoutRow = ({workout}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (confirm("Sure?")) {
            Inertia.delete(route('workouts.delete', workout.id))
        }
    }

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="ml-3">
                        <Link href={route('workouts.show', {workout: workout.id})}>
                            <p className="text-gray-900 whitespace-no-wrap">

                                {workout.title}
                            </p>
                        </Link>
                    </div>
                </div>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {workout.description}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="inline-block">
                    <div
                        className={`px-2 py-1 flex items-center rounded-full font-semibold ${workout.public ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'}`}
                    >
                        {workout.public ? 'Public' : 'Private'}
                    </div>
                </div>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <TableButton color="red" type="button" onClick={(e) => handleSubmit(e)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default WorkoutRow;
