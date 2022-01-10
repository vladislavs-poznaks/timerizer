import React, {useState} from 'react'
import PrimaryButton from "@/Shared/Components/PrimaryButton";
import ExerciseCard from "../../Exercises/components/ExerciseCard";
import moment from "moment";
import Timer from "@/Shared/Timer";
import Badge from "../../../Shared/Components/Badge";

const SetCard = ({workout, set}) => {
    // const [createExercise, setCreateExercise] = useState(false);
    // const [createExerciseType, setCreateExerciseType] = useState(false);

    const [setRunning, setSetRunning] = useState(false)

    return (
        <>
            <div
                className="shadow-lg rounded-2xl px-10 py-4 bg-white dark:bg-gray-700 space-y-4 flex flex-col space-y-2">

                <Timer set={set} isRunning={setRunning}/>

                <div className="flex items-center space-x-4">

                    <div className="font-semibold text-gray-700">{set.title}</div>

                    <Badge className="uppercase">
                        {set.total_seconds ? `${moment.duration(set.total_seconds, "seconds").humanize()}` : `${set.rounds} x`} {set.type_name}
                    </Badge>
                    {set.work_seconds && <Badge color="green" className="uppercase">
                        Work {set.work_seconds} sec
                    </Badge>}
                    {set.rest_seconds && <Badge color="red" className="uppercase">
                        Rest {set.rest_seconds} sec
                    </Badge>}
                </div>

                <div className="text-gray-700">
                    {set.description}
                </div>

                <div className="flex flex-col space-y-2">
                    {set.exercises && set.exercises.map((exercise, key) => <ExerciseCard key={key}
                                                                                         exercise={exercise}/>)}
                </div>

                <div className="flex justify-center space-x-2">
                    <PrimaryButton type="button" onClick={() => setSetRunning(!setRunning)}>
                        {setRunning ? 'Pause set' : 'Start set'}
                    </PrimaryButton>
                    {/*<SecondaryButton type="button" onClick={() => setCreateExercise(true)}>Add exercise</SecondaryButton>*/}
                </div>

            </div>

            {/*<CreateExercise workout={workout} set={set} isOpen={createExercise} setIsOpen={setCreateExercise} setCreateExerciseType={setCreateExerciseType}/>*/}
        </>
    )
}

export default SetCard;
