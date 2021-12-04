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

    const shouldPlayShortBeep = (roundsLeft) => {
        if (secondsLeft - (roundsLeft * set.round_seconds + set.rest_seconds) <= 4 && secondsLeft - (roundsLeft * set.round_seconds + set.rest_seconds) >= 2) {
            return true
        }

        if (secondsLeft - roundsLeft * set.round_seconds <= 4 && secondsLeft - roundsLeft * set.round_seconds >= 2) {
            return true
        }

        return  false
    }

    const shouldPlayLongBeep = (roundsLeft) => {
        return  secondsLeft - (roundsLeft * set.round_seconds + set.rest_seconds) === 1 || secondsLeft - roundsLeft * set.round_seconds === 1
    }

    useEffect(() => {
        if (! set.rounds) {
            return
        }

        const roundsLeft = Math.floor( secondsLeft / (set.work_seconds + set.rest_seconds))

        setCurrentRound(Math.max(set.rounds - roundsLeft, 1))

        setIsWorking(secondsLeft > roundsLeft * set.round_seconds + set.rest_seconds || secondsLeft === roundsLeft * set.round_seconds)

        if (shouldPlayShortBeep(roundsLeft)) {
            shortBeep.play()
        }

        if (shouldPlayLongBeep(roundsLeft)) {
            longBeep.play()
        }

    }, [secondsLeft])

    useEffect(() => {
        if (isRunning && secondsLeft > 0) {
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
