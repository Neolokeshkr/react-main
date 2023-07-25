import { useState } from "react";
import { useImmer } from "use-immer";


const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList({ heading, subHeading }) {

    // const [myList, setMyList] = useState(initialList);
    // const [yourList, setYourList] = useState(initialList);

    // immer
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    

    function handleMyListCheckboxToggle(itemId, nextSeen) {
        // setMyList(myList.map( item => item.id === itemId ? {...item, seen : nextSeen} : item))

        // immer logic
        updateMyList( draft => { 
            const updateItem = draft.find( item => item.id === itemId) 
            updateItem.seen = nextSeen;
        })
    }

    function handleYourListCheckboxToggle(itemId, nextSeen) {
        // setYourList(yourList.map( item => item.id === itemId ? {...item, seen : nextSeen} : item))

        // immer logic
        updateYourList( draft => {
            const updateItem = draft.find( item => item.id === itemId)
            updateItem.seen = nextSeen;
        })
    }

    return (
        <div>
            <h2>{heading}</h2>
            <h3>My {subHeading}</h3>
            <ItemList listArray={myList} onToggle={handleMyListCheckboxToggle}/>
            <h3>Your {subHeading}</h3>
            <ItemList listArray={yourList} onToggle={handleYourListCheckboxToggle}/>
        </div>
    )
}

function ItemList({listArray, onToggle}) {

    return (
        <ul>
            {
                listArray.map(item => (
                    <div key={item.id}>
                        <input type='checkbox' checked={item.seen} onChange={e => onToggle(item.id, e.target.checked)}></input>
                        <li>{item.title}</li>
                    </div>
                )
                )}
        </ul>
    )
}