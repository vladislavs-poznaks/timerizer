import React from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";

const SetCard = ({set}) => {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-2 flex flex-col space-y-2">
            <div className="flex items-center justify-between items-center">
                <div className="flex justify-between items-center space-y-2">
                    <div>{set.title}</div>
                    <PrimaryButton type="button">Add exercise</PrimaryButton>
                </div>
                <div
                    className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-100`}
                >
                    {set.type_name.toUpperCase()}
                </div>
            </div>
            <div className="flex justify-between space-x-2 items-center">
                <div>Rounds: {set.rounds}</div>
                <div>Total seconds: {set.total_seconds}</div>
                <div>Work seconds: {set.work_seconds}</div>
                <div>Rest seconds: {set.rest_seconds}</div>
            </div>
            <div>
                Description: {set.description}
            </div>
        </div>
    )
}

export default SetCard;
