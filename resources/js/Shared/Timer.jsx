import React, {useEffect, useState} from 'react'
import {usePage} from "@inertiajs/inertia-react";
import TimerDisplay from "./TimerDisplay";

const Timer = ({set, isRunning}) => {
    const {assets} = usePage().props

    const shortBeep = new Audio(assets.shortBeep)
    const longBeep = new Audio(assets.longBeep)

    const [secondsLeft, setSecondsLeft] = useState(set.total_seconds)

    const [roundSeconds, setRoundSeconds] = useState(0)

    const [isWorking, setIsWorking] = useState(true)

    const [currentRound, setCurrentRound] = useState()

    const shouldPlayShortBeep = () => {
        const beepAtSecondsLeft = [4, 3, 2]
        return beepAtSecondsLeft.includes((isWorking ? set.work_seconds : set.round_seconds) - roundSeconds)
    }

    const shouldPlayLongBeep = () => {
        const beepAtSecondsLeft = [1]
        return beepAtSecondsLeft.includes((isWorking ? set.work_seconds : set.round_seconds) - roundSeconds)
    }

    useEffect(() => {
        if (set.rounds) {
            setRoundSeconds(secondsLeft % set.round_seconds === 0 ? 1 : set.round_seconds - (secondsLeft % set.round_seconds) + 1);
            setCurrentRound(Math.max(set.rounds - Math.floor(secondsLeft / set.round_seconds), 1))
            setIsWorking(roundSeconds < set.work_seconds)

            if (shouldPlayShortBeep()) {
                shortBeep.play()
            }

            if (shouldPlayLongBeep()) {
                longBeep.play()
            }

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
            <div
                className={`px-2 py-1 rounded-lg ${isRunning ? (isWorking ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100') : 'text-gray-700'}`}
            >
                <TimerDisplay
                    currentRound={currentRound}
                    secondsLeft={secondsLeft}
                    roundSecondsLeft={(isWorking ? set.work_seconds - roundSeconds : set.round_seconds - roundSeconds) + 1}
                />
            </div>
        </div>
    );
}

export default Timer;
