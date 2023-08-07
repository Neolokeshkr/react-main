import { useReducer } from "react"


export default function SimpleReducer(){

    const [state, dispatch] = useReducer(counterReducer, {counter: 0})

    return(
        <>
            Counter : {state.counter}
            <br />
            <button
                onClick={() => dispatch({
                    type: 'INCREMENT',
                    counter: state.counter

                })}
            >Increment</button>
            <button
                onClick={() => dispatch({
                    type: 'DECREMENT',
                    counter: state.counter

                })}
            >Decrement</button>
        </>
    )
}

// reducer function is a pure function
function counterReducer(state, action){
    switch(action.type){
        case 'INCREMENT':{
            return {
                ...state,
                counter: action.counter++
            }
        }
        case 'DECREMENT':{
            return {
                ...state,
                counter: action.counter--
            }
        }
        default : throw Error('Action is not defined ' + action.type)
    }
}