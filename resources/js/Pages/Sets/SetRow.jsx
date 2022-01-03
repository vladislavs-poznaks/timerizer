import React, {useState} from 'react'
import {Link} from "@inertiajs/inertia-react";
import {PencilAltIcon, TrashIcon} from "@heroicons/react/outline";
import TableButton from "@/Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";
import Badge from "@/Shared/Components/Badge";
import Modal from "@/Shared/Components/Modal";

const Set = ({set, setEditExerciseType, setShowVideo, setExerciseType}) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        if (confirm("Sure?")) {
            Inertia.delete(route('sets.delete', set.id))
        }
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <Link href={route('sets.show', {set: set.id})}>
                    <div className="text-sm font-medium text-gray-900">
                        {set.title}
                    </div>
                </Link>
            </td>
            {/*<td className="px-6 py-4 whitespace-nowrap">*/}
            {/*    <button type="button" className="text-sm text-gray-900"*/}
            {/*            onClick={() => {*/}
            {/*                setShowVideo(true)*/}
            {/*                setExerciseType(set)*/}
            {/*            }}>*/}
            {/*        {set.url}*/}
            {/*    </button>*/}
            {/*</td>*/}
            <td className="flex justify-center items-center space-x-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {/*<TableButton type="button" onClick={() => {*/}
                {/*    setEditExerciseType(true)*/}
                {/*    setExerciseType(exerciseType)*/}
                {/*}}>*/}
                {/*    <PencilAltIcon className="w-5 h-5"/>*/}
                {/*</TableButton>*/}
                <TableButton type="button" onClick={(e) => handleSubmit(e)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </tr>
    )
}

export default Set;
