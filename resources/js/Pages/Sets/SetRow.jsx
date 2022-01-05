import React, {useState} from 'react'
import {ChevronDownIcon, ChevronUpIcon, PencilAltIcon, PlusCircleIcon, TrashIcon} from "@heroicons/react/outline";
import TableButton from "@/Shared/Components/TableButton";
import ExerciseCard from "../Exercises/ExerciseCard";

const SetRow = ({set, setEditCallback, setDeleteCallback, exerciseCreateCallback, setShowVideo, setExerciseType}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <button className="flex justify-start space-x-2 items-center" onClick={() => setExpanded(!expanded)}>
                        {expanded ? <ChevronUpIcon className="w-5 h-5"/> : <ChevronDownIcon className="w-5 h-5"/>}
                        <div className="text-sm font-medium text-gray-900">
                            {set.title}
                        </div>
                    </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="uppercase">{set.type_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="uppercase">{set.rounds}</div>
                </td>
                <td className="flex justify-end items-center space-x-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <TableButton type="button" onClick={() => exerciseCreateCallback(set)}>
                        <PlusCircleIcon className="w-5 h-5"/>
                    </TableButton>
                    <TableButton type="button" onClick={() => setEditCallback(set)}>
                        <PencilAltIcon className="w-5 h-5"/>
                    </TableButton>
                    <TableButton type="button" onClick={() => setDeleteCallback(set)}>
                        <TrashIcon className="w-5 h-5"/>
                    </TableButton>
                </td>
            </tr>
            {expanded && <tr>
                <td className="px-6 py-4 text-sm flex flex-col space-y-2">
                    {set.exercises.map((exercise, key) => <ExerciseCard key={key} exercise={exercise}/>)}
                </td>
            </tr>}
        </>


    )
}

export default SetRow;
