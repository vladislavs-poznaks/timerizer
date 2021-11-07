import React from 'react'

const ExerciseCard = ({exercise}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center space-x-2">
                <div>{exercise.type.name}</div>
                {exercise.repetitions && <div className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-purple-500 bg-purple-100">{exercise.repetitions} repetitions</div>}
                {exercise.seconds && <div className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-purple-500 bg-purple-100">{exercise.seconds} seconds</div>}
                {exercise.type.per_side && <div className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-purple-500 bg-purple-100">Each side</div>}
            </div>
        </div>
    )
}

export default ExerciseCard;
