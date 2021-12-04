import React from 'react'
import moment from "moment";

const TimerDisplay = ({currentRound, secondsLeft}) => {

    const setTimeLeft = () => {
        const duration = moment.duration(secondsLeft, "seconds")

        return `${format(duration.hours())}:${format(duration.minutes())}:${format(duration.seconds())}`
    }

    const format = (time) => {
        return (time < 10 ? "0" : "") + time
    }

    return (
        <span className="block text-5xl font-bold">
            {currentRound && `${currentRound} - `} {setTimeLeft()}
        </span>
    );
}

export default TimerDisplay;
