import React, {useEffect, useState} from 'react'
import {usePage} from "@inertiajs/inertia-react";
import TimerDisplay from "./TimerDisplay";

const Timer = ({set, isRunning, setIsRunning}) => {
    const {assets} = usePage().props

    const shortBeep = new Audio(assets.shortBeep)
    const longBeep = new Audio(assets.longBeep)

    const [secondsLeft, setSecondsLeft] = useState(set.total_seconds)

    const [isWorking, setIsWorking] = useState(true)

    const [currentRound, setCurrentRound] = useState()

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
        if (secondsLeft === 0) {
            setIsRunning(false)
        }

        if (isRunning) {
            const timer = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isRunning, secondsLeft])

    return (
        <div className={`flex justify-center`}>
            <div className={`px-2 py-1 rounded-lg ${isRunning ? (isWorking ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100') : 'text-gray-700'}`}>
                <TimerDisplay currentRound={currentRound} secondsLeft={secondsLeft} />
            </div>
        </div>
    );
}

export default Timer;
