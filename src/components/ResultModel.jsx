

export default function ResultModel({ result, targetTime }) {
    return (
        <dialog className='result-model'>
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>X second left.</strong>
            </p>
            <form><button>Close</button></form>
        </dialog>
    );
}



