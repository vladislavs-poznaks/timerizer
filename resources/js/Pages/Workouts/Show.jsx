import React, {useEffect, useState} from 'react'
import {Head} from '@inertiajs/inertia-react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import CreateSet from "../Sets/CreateSet";
import SetCard from "../Sets/SetCard";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import moment from "moment";

const Show = ({workout, setTypes}) => {
    const [createSet, setCreateSet] = useState(false)

    // const [workoutRunning, setWorkoutRunning] = useState(false)
    // const [secondsLeft, setSecondsLeft] = useState(workout.total_seconds)
    //
    // const workoutTimeLeft = () => {
    //     const duration = moment.duration(secondsLeft, "seconds")
    //
    //     return `${format(duration.hours())}:${format(duration.minutes())}:${format(duration.seconds())}`
    // }
    //
    // const format = (time) => {
    //     return (time < 10 ? "0" : "") + time
    // }
    //
    // useEffect(() => {
    //     if (workoutRunning) {
    //         const timer = setTimeout(() => {
    //             setSecondsLeft(secondsLeft - 1);
    //         }, 1000);
    //
    //         return () => clearTimeout(timer);
    //     }
    // }, [workoutRunning, secondsLeft])

    return (
        <>
            <Head title={workout.title}/>
            <div className="shadow-lg rounded-xl px-10 py-4 bg-white dark:bg-gray-700 w-full space-y-2">
                {/*<div className="flex justify-center block text-5xl font-bold text-gray-700">*/}
                {/*    <span>{workoutTimeLeft()}</span>*/}
                {/*</div>*/}

                <div className="flex items-center justify-between items-center">
                    <div className="font-bold text-gray-700">{workout.title}</div>
                    <div
                        className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${workout.public ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                    >
                        {workout.public ? 'Public' : 'Private'}
                    </div>
                </div>
                <div>
                    {workout.description}
                </div>

                <div className="flex justify-center space-x-2">
                    {/*<PrimaryButton type="button" onClick={() => setWorkoutRunning(! workoutRunning)}>*/}
                    {/*    {workoutRunning ? 'Pause workout' : 'Start workout'}*/}
                    {/*</PrimaryButton>*/}
                    <PrimaryButton type="button" onClick={() => setCreateSet(true)}>Add set</PrimaryButton>
                </div>
            </div>

            <div className="w-full space-y-4">
                {workout.sets.length && workout.sets.map((set, key) => <SetCard workout={workout} set={set} key={key}/>)}
            </div>

            <CreateSet workout={workout} types={setTypes.data} isOpen={createSet} setIsOpen={setCreateSet} />
        </>
    );
};

export default Show;
