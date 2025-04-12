/* code 1
import { useRef, useState } from 'react' // Importing necessary hooks from React

function App() {
    const inputRef = useRef(); // Creating a ref to be attached to an input element

    function focusOnInput() {
        /!* document.getElementById("name").focus(); *!/ // Old way of focusing (commented out)
        inputRef.current.focus(); // Using the ref to focus on the input element
    }

    return (
        <div>
            Signup
            <input ref={inputRef} type={"text"}></input> {/!*!// Attaching the ref to this input*!/}
            <input type={"text"}></input> {/!*!// Another input without a ref*!/}
            <button onClick={focusOnInput}>Submit</button> {/!*!// Button that triggers focus on input*!/}
        </div>
    )
}

export default App // Exporting the App component as the default export
*/
//code 2 clock with start and stop button
// better code
import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return; // Already running, do nothing

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h1>Timer: {time}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Stopwatch