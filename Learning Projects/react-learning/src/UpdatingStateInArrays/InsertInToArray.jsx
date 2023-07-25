import { useState } from "react";

const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

export default function InsertInToArray({children}){

    const [artists, setArtists] = useState(initialArtists)
    const [input, setInput] = useState('');
    
    function handleInsert(){
        const nextId = artists.length;

        const newArtistArray = [
            ...artists,
            {
                id: nextId,
                name: input
            }
        ]
        
        setArtists(newArtistArray);
        setInput('');
    }

    function handleInputChange(e){
        setInput(e.target.value)
    }

    function handleReverseArray(){
        const reverseArrayItems = [...artists]
        setArtists(reverseArrayItems.reverse());
    }

    return(
        <>
            <h2>{children}:</h2>
            <label>
                <input type="text" name='sculptor' value={input} onChange={e => handleInputChange(e)}/>
                <button onClick={handleInsert}>Insert</button>
            </label>
            <ul>
                {
                 artists.map( artist => <li key={artist.id}>{artist.name}</li>)
                }
            </ul>
            <button onClick={handleReverseArray}>Reverse</button>            
        </>
    )
}