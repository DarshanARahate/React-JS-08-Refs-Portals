
import { useRef, useState } from "react";
import ResultModel from "./ResultModel";


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            {timerExpired && <ResultModel ref={dialog} targetTime={targetTime} result="lost" />}
            <section className="challange">
                <h2>{title}</h2>

                <p className="challange-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>

                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>

                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section></>
    );



}