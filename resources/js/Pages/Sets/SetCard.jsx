import React, {useState} from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import CreateExercise from "../Exercises/CreateExercise";
import ExerciseCard from "../Exercises/ExerciseCard";
import CreateExerciseType from "../ExerciseTypes/CreateExerciseType";
import moment from "moment";

const SetCard = ({workout, set}) => {
    const [createExercise, setCreateExercise] = useState(false);
    const [createExerciseType, setCreateExerciseType] = useState(false);

    return (
        <>
            <div className="shadow-lg rounded-2xl px-10 py-4 bg-white dark:bg-gray-700 space-y-4 flex flex-col space-y-2">

                <div className="flex items-center space-x-4">

                    <div className="font-semibold text-gray-700">{set.title}</div>

                    <div
                        className="px-2 py-1 flex items-center text-xs rounded-md font-semibold uppercase text-green-500 bg-green-100"
                    >
                        {set.rounds ? set.rounds : `${moment.duration(set.total_seconds, "seconds").humanize()}`} {set.type_name}
                    </div>
                </div>

                <div className="text-gray-700">
                    {set.description}
                </div>

                {/*<div className="flex space-x-2 items-center">*/}
                {/*    <div>Work seconds: {set.work_seconds}</div>*/}
                {/*    <div>Rest seconds: {set.rest_seconds}</div>*/}
                {/*</div>*/}

                <div className="flex flex-col space-y-2">
                    {set.exercises && set.exercises.map((exercise, key) => <ExerciseCard key={key} exercise={exercise}/>)}
                </div>

                <div className="flex justify-center">
                    <PrimaryButton type="button" onClick={() => setCreateExercise(true)}>Add exercise</PrimaryButton>

                </div>

            </div>

            <CreateExercise workout={workout} set={set} isOpen={createExercise} setIsOpen={setCreateExercise} setCreateExerciseType={setCreateExerciseType}/>
            <CreateExerciseType isOpen={createExerciseType} setIsOpen={setCreateExerciseType}/>
        </>
    )
}

export default SetCard;
