import { useState } from "react";

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TodoList() {

    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTaskClick(task) {
        const id = tasks.length;
        setTasks(
            [
                ...tasks,
                {
                    id: id,
                    text: task,
                    done: false
                }
            ]
        )
    }

    function handleCheckBoxClick(taskId) {
        const updatesTask = tasks.map(task => task.id === taskId ? {
            id: task.id,
            text: task.text,
            done: !task.done
        } : task
        )
        setTasks(updatesTask);
    }

    // function handleEditClick(task) {

    // }

    function handleDeleteClick(taskId) {
        const updatedArray = tasks.filter(task => task.id !== taskId);
        setTasks(updatedArray);
    }

    // console.log(tasks);
    return (
        <>
            <h2>My TaskList</h2>
            <AddTask addTask={handleAddTaskClick} />
            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                handleCheckBox={handleCheckBoxClick}
                handleDelete={handleDeleteClick}
            />

        </>
    )
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

function TaskList({ tasks, handleCheckBox, handleEditClick, handleDelete }) {

    // const [isEditableArray, setIsEditableArray] = useState(true);
    // const [editableValue, setEditableValues] = useState(tasks.map(t => t.text));
    // console.log(editableValue);
    
    // function handleEditInputBox(e, index){
    //     const editedValues = editableValue.map((val,ind) => ind === index ? e.target.value:val)
    //     setEditableValues(editedValues)
    // }

    return (
        <>
            {
                tasks.map((task, index) => <li key={task.id}>
                    <input
                        type='checkbox'
                        checked={task.done}
                        onChange={() => handleCheckBox(task.id)}
                    />

                    {/* {!isEditableArray && task.text}{' '} */}
                    {task.text}{' '}

                    {/* {isEditableArray &&
                        <label>
                            <input 
                                value={editableValue[index]}
                                onChange={ e => {handleEditInputBox(e, index)}}
                            />
                            <button>
                                Save
                            </button>
                        </label>
                    } */}

                    {
                        // !isEditableArray && <button
                        <button

                            onClick={() => handleEditClick()}
                        >
                            Edit
                        </button>
                    }
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

// function EditForm(tasksProp){
//     const [tasks, settasks] = useState(tasksProp);
//     return(
//         <>
//             <input 
//                 value={task.titl}
//             />
//             <button>
//                 Save
//             </button>
//         </>
//     )
// }