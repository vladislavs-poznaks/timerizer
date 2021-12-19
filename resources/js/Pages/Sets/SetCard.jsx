import React, {useEffect, useState} from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import CreateExercise from "../Exercises/CreateExercise";
import ExerciseCard from "../Exercises/ExerciseCard";
import CreateExerciseType_OLDIE from "../ExerciseTypes/CreateExerciseType";
import moment from "moment";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import Timer from "../../Shared/Timer";

const SetCard = ({workout, set}) => {
    const [createExercise, setCreateExercise] = useState(false);
    const [createExerciseType, setCreateExerciseType] = useState(false);

    const [setRunning, setSetRunning] = useState(false)

    return (
        <>
            <div className="shadow-lg rounded-2xl px-10 py-4 bg-white dark:bg-gray-700 space-y-4 flex flex-col space-y-2">

                <Timer set={set} isRunning={setRunning} />

                <div className="flex items-center space-x-4">

                    <div className="font-semibold text-gray-700">{set.title}</div>

                    <div
                        className="px-2 py-1 flex items-center text-xs rounded-md font-semibold uppercase text-green-500 bg-green-100"
                    >
                        {set.total_seconds ? `${moment.duration(set.total_seconds, "seconds").humanize()}` : `${set.rounds} x`} {set.type_name}
                    </div>
                    {set.work_seconds && <div
                        className="px-2 py-1 flex items-center text-xs rounded-md font-semibold uppercase text-green-500 bg-green-100"
                    >
                        Work {set.work_seconds} sec
                    </div>}
                    {set.rest_seconds && <div
                        className="px-2 py-1 flex items-center text-xs rounded-md font-semibold uppercase text-red-500 bg-red-100"
                    >
                        Rest {set.rest_seconds} sec
                    </div>}
                </div>

                <div className="text-gray-700">
                    {set.description}
                </div>

                <div className="flex flex-col space-y-2">
                    {set.exercises && set.exercises.map((exercise, key) => <ExerciseCard key={key} exercise={exercise}/>)}
                </div>

                <div className="flex justify-center space-x-2">
                    <PrimaryButton type="button" onClick={() => setSetRunning(! setRunning)}>
                        {setRunning ? 'Pause set' : 'Start set'}
                    </PrimaryButton>
                    <SecondaryButton type="button" onClick={() => setCreateExercise(true)}>Add exercise</SecondaryButton>
                </div>

            </div>

            <CreateExercise workout={workout} set={set} isOpen={createExercise} setIsOpen={setCreateExercise} setCreateExerciseType={setCreateExerciseType}/>
            {/*<CreateExerciseType_OLDIE isOpen={createExerciseType} setIsOpen={setCreateExerciseType}/>*/}
        </>
    )
}

export default SetCard;
