import React, {useState} from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import CreateExercise from "../Exercises/CreateExercise";
import ExerciseCard from "../Exercises/ExerciseCard";
import CreateExerciseType from "../ExerciseTypes/CreateExerciseType";

const SetCard = ({workout, set}) => {
    const [createExercise, setCreateExercise] = useState(false);
    const [createExerciseType, setCreateExerciseType] = useState(false);

    return (
        <>
            <div
                className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full space-y-2 flex flex-col space-y-2">
                <div className="flex items-center justify-between items-center">
                    <div className="flex justify-between items-center space-y-2">
                        <div>{set.title}</div>
                        <PrimaryButton type="button" onClick={() => setCreateExercise(true)}>Add
                            exercise</PrimaryButton>
                    </div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold uppercase text-green-500 bg-green-100`}
                    >
                        {set.type_name}
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
                <div className="flex flex-col space-y-1">
                    {set.exercises && set.exercises.map((exercise, key) => <ExerciseCard key={key}
                                                                                         exercise={exercise}/>)}
                </div>
            </div>
            <CreateExercise workout={workout} set={set} isOpen={createExercise} setIsOpen={setCreateExercise} setCreateExerciseType={setCreateExerciseType}/>
            <CreateExerciseType isOpen={createExerciseType} setIsOpen={setCreateExerciseType}/>
        </>
    )
}

export default SetCard;
