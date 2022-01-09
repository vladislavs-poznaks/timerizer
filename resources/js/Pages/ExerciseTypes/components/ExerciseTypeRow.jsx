import React, {useState} from 'react'
import {Link} from "@inertiajs/inertia-react";
import {PencilAltIcon, TrashIcon} from "@heroicons/react/outline";
import TableButton from "@/Shared/Components/TableButton";
import {Inertia} from "@inertiajs/inertia";
import Badge from "@/Shared/Components/Badge";
import Modal from "@/Shared/Components/Modal";
import DatatableRow from "../../../Shared/Components/DatatableRow";

const ExerciseTypeRow = ({exerciseType, exerciseTypeEditCallback, exerciseTypeDeleteCallback}) => {
    return (
        <DatatableRow>
            <td className="px-6 py-4 whitespace-nowrap flex justify-start space-x-2 items-center">
                <Link href={route('exercise-types.show', {exerciseType: exerciseType.id})}>
                    <div className="text-sm font-medium text-gray-900">
                        {exerciseType.name}
                    </div>
                </Link>
                {exerciseType.per_side && <Badge>Per side</Badge>}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button type="button" className="text-sm text-gray-900"
                        onClick={() => alert('TODO')}>
                    {exerciseType.url}
                </button>
            </td>
            <td className="flex justify-end items-center space-x-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <TableButton type="button" onClick={() => exerciseTypeEditCallback(exerciseType)}>
                    <PencilAltIcon className="w-5 h-5"/>
                </TableButton>
                <TableButton type="button" onClick={() => exerciseTypeDeleteCallback(exerciseType)}>
                    <TrashIcon className="w-5 h-5"/>
                </TableButton>
            </td>
        </DatatableRow>
    )
}

export default ExerciseTypeRow;
