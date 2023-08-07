import { useReducer, useState } from "react"

// export const initialState = {
//     id: 0,
//     text: 'Hello',
//   };

// let id = 0;
export default function SimpleReducer() {

    const [state, dispatch] = useReducer(todoReducer, [])

    function addTask(todo){
        dispatch(
            {
                    type:'addTodo',
                    id: state.length,
                    text:todo
            }
        )
    }

    return (
        <>
            <AddTodo addTask={addTask}/>
            <ul>
                {
                     state.map( item => <li key={item.id}>{item.text}</li>)
                }
            </ul>
        </>
    )
}

function AddTodo({addTask}){

    const [todo, setTodo] = useState('')

    return(
        <>
             <label
                onClick={e => {console.log('label clicked')}}
             >
                <input
                    type="text"
                    value={todo}
                    onChange={ e => setTodo(e.target.value)}

                />
                <button
                    onClick={e => {
                        e.stopPropagation()
                        addTask(todo)
                        setTodo('')
                        console.log('button clicked')
                    }}
                >
                    Add
                </button>            
            </label>
        </>
    )
}

function todoReducer(state, action){
    switch(action.type){
        case 'addTodo': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
                
            ]
        }
    }
}






