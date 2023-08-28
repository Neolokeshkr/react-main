import React from "react";
import { useState } from "react";

export default function Counter(){

    const [counter, setCounter] = useState(0)

    // Instead of passing the state directly, using it in a function that calculates the next state based on the previous one
          // React queues this function to be processed after all the other code in the event handler has run.
          // During the next render, React goes through the queue and gives you the final updated state.

    function increment(){
        setCounter(counter => counter + 1);     // updater Function
        setCounter(counter => counter + 1);     // updater Function
        setCounter(counter => counter + 1);     // updater Function
    }

    function decrement(){
        setCounter(counter-1)
    }

    return (
        <div>
            <button onClick={() => increment()}>+</button>
            <input value={counter}></input>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}