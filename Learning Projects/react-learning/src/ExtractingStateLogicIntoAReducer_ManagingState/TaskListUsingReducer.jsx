// You can migrate from useState to useReducer in three steps:

import { useReducer, useState } from "react"
let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TodoListUsingReducer(){
    
    const [tasks, dispatch ] = useReducer(todoListReducer, initialTasks )

    // Step 1: Move from setting state to dispatching actions 
    function handleAddTodo(text){
        dispatch(
        // The object you pass to dispatch is called action
        {
            type: 'addTodo',
            id: tasks.length,
            text: text,
        })
    }

    function handleDeleteTodo(todoId){
        dispatch({
            type:'deleteTodo',
            id:todoId
        })
    }

    return(
        <>
            <h2>My TaskList</h2>
            <AddTask addTask={handleAddTodo} />
            <TaskList
                tasks={tasks}
                // handleCheckBox={handleCheckBoxClick}
                handleDelete={handleDeleteTodo}
            />
        </>
    )
}

// Step 2: Writing reducer 
    //  A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:
function todoListReducer(tasks, action){
    switch(action.type){
        case 'addTodo': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                }
            ]
        }
        case 'deleteTodo': {
            return tasks.filter( task => task.id !== action.id)
            
        }
        default: {
            throw Error('Unknown Action: '+action.type)
        }
    }
}

function AddTask({ addTask }) {

    const [newTask, setNewTask] = useState('')

    return (
        <>
            <label>
                <input
                    type='text'
                    value={newTask}
                    onChange={e => { setNewTask(e.target.value) }}
                />
                <button
                    onClick={() => {addTask(newTask); setNewTask('')}}
                >
                    Add Task
                </button>
            </label>
        </>
    )
}

function TaskList({ tasks, handleDelete }) {

    return (
        <>
            {
                tasks.map((task) => <li key={task.id}>
                    {/* <input
                        type='checkbox'
                        checked={task.done}
                        onChange={() => handleCheckBox(task.id)}
                    /> */}
                    {task.text}{' '}
                    {' '}
                    <button
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </li>)
            }
        </>
    )
}