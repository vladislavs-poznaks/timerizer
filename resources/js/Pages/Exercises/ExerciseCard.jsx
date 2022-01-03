import React from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import moment from "moment";
import Badge from "../../Shared/Components/Badge";

const ExerciseCard = ({exercise}) => {
    return (
        <div className="flex justify-between items-center">
            {exercise.type.name.toLowerCase() === 'rest'
                ?
                <div className="flex justify-between items-center space-x-2 py-2">
                    {exercise.seconds && <div
                        className="px-2 py-1 flex items-center text-xs rounded-md font-bold text-green-500 bg-green-100">{exercise.type.name} {moment.duration(exercise.seconds, "seconds").humanize()}</div>}
                </div>
                :
                <div className="flex justify-between items-center space-x-2">
                    {exercise.repetitions && <Badge>{exercise.repetitions} x</Badge>}
                    {exercise.seconds && <Badge>{exercise.seconds} sec</Badge>}

                    <div className="font-semibold text-gray-700">{exercise.type.name}</div>

                    {exercise.type.per_side && <Badge>per side</Badge>}
                </div>
            }
        </div>
    )
}

export default ExerciseCard;
