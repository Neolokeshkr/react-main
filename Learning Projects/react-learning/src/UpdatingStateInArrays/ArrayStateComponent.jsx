import { useState } from "react";

let id = 0;

export default function ArrayStateComponent() {

    const [name, setName] = useState('')
    const [arrayState, setArrayState] = useState([]);

    function handleInputChange(e) {
        setName(e.target.value);
    }

    function handleAddItemButton() {
        if (name) {
            setArrayState(
                [
                    ...arrayState,
                    { id: id++, name: name }
                ]
            )
            setName('');

        }
    }

    // function handleDeleteItem(key){
    //     if(key){
    //         setArrayState(
    //             arrayState.filter(item => {item.id !== key})
    //         )
    //     }
    // }

    return (
        <>
            <label>
                Array Component : <input placeholder="name" value={name} onChange={handleInputChange}></input>
            </label>
            <button onClick={handleAddItemButton}>
                Add item
            </button>
            <ul>
                {
                    arrayState.map(item => <li key={item.id}>
                        {item.name}
                        <button onClick={() => {
                            setArrayState(
                                arrayState.filter(ele => ele.id !== item.id)
                            )
                        }}>
                            Delete
                        </button>
                    </li>)
                }
            </ul>
        </>
    )
}