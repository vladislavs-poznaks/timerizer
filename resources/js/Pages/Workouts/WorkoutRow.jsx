import React from 'react'
import {Link, useForm} from "@inertiajs/inertia-react";
import {TrashIcon} from "@heroicons/react/outline";
import TableButton from "../../Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";

const WorkoutRow = ({workout}) => {

    const handleSubmit = (e) => {
        console.log('HERE')
        e.preventDefault()
        Inertia.delete(route('workouts.delete', workout.id))
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
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true"
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {workout.public ? 'Public' : 'Private'}
                    </span>
                </span>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <TableButton type="button" onClick={(e) => handleSubmit(e)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default WorkoutRow;
