import React, {useEffect, useState} from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import CreateExercise from "../Exercises/CreateExercise";
import ExerciseCard from "../Exercises/ExerciseCard";
import CreateExerciseType from "../ExerciseTypes/CreateExerciseType";
import moment from "moment";
import SecondaryButton from "../../Shared/Components/SecondaryButton";
import {usePage} from "@inertiajs/inertia-react";

const SetCard = ({workout, set}) => {
    const {assets} = usePage().props

    const [createExercise, setCreateExercise] = useState(false);
    const [createExerciseType, setCreateExerciseType] = useState(false);

    const [setRunning, setSetRunning] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(set.total_seconds)

    const [currentRound, setCurrentRound] = useState()
    const [isWorking, setIsWorking] = useState(true)

    const shortBeep = new Audio(assets.shortBeep)
    const longBeep = new Audio(assets.longBeep)

    const setTimeLeft = () => {
        const duration = moment.duration(secondsLeft, "seconds")

        return `${format(duration.hours())}:${format(duration.minutes())}:${format(duration.seconds())}`
    }

    const format = (time) => {
        return (time < 10 ? "0" : "") + time
    }

    useEffect(() => {
        const round = set.rounds - Math.floor( secondsLeft / (set.work_seconds + set.rest_seconds))

        const roundsLeft = set.rounds - round

        setCurrentRound(round === 0 ? 1 : round)

        setIsWorking(secondsLeft > roundsLeft * (set.work_seconds + set.rest_seconds) + set.rest_seconds || secondsLeft === roundsLeft * (set.work_seconds + set.rest_seconds))

        if ((secondsLeft - (roundsLeft * (set.work_seconds + set.rest_seconds) + set.rest_seconds) <= 4 && secondsLeft - (roundsLeft * (set.work_seconds + set.rest_seconds) + set.rest_seconds) >= 2)
        || (secondsLeft - roundsLeft * (set.work_seconds + set.rest_seconds) <= 4 && secondsLeft - roundsLeft * (set.work_seconds + set.rest_seconds) >= 2)) {
            shortBeep.play()
        }

        if (secondsLeft - (roundsLeft * (set.work_seconds + set.rest_seconds) + set.rest_seconds) === 1 || secondsLeft - roundsLeft * (set.work_seconds + set.rest_seconds) === 1) {
            longBeep.play()
        }

    }, [secondsLeft])

    useEffect(() => {
        if (setRunning) {
            const timer = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [setRunning, secondsLeft])

    return (
        <>
            <div className="shadow-lg rounded-2xl px-10 py-4 bg-white dark:bg-gray-700 space-y-4 flex flex-col space-y-2">

                <div className={`flex justify-center`}>
                    <div className={`block text-5xl font-bold px-2 py-1 rounded-lg ${setRunning ? (isWorking ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100') : 'text-gray-700'}`}>{currentRound} - {setTimeLeft()}</div>
                </div>

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
            <CreateExerciseType isOpen={createExerciseType} setIsOpen={setCreateExerciseType}/>
        </>
    )
}

export default SetCard;
