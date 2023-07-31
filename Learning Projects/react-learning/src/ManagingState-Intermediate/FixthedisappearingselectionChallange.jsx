import { useState } from "react";

const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];


export default function MailClient() {

    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, sethighlightedId] = useState(null);

    function handleButtonClick(starred){
        setLetters(
            letters.map( letter => letter.id === starred.id ?
                {
                    ...letter,
                    isStarred: !letter.isStarred
                }
                :
                letter
                )
        )
    }

    function handleHover(letterId){
        sethighlightedId(letterId);
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {
                    letters.map(letter => (
                        <Letter
                            key={letter.id}
                            letter={letter}
                            onButtonClick={handleButtonClick}
                            onHover={handleHover}
                            isHighlighted={letter.id === highlightedId}
                        />
                    ))
                }
            </ul>

        </>
    )
}

function Letter({ letter, onButtonClick, onHover, isHighlighted }) {
    return (
        <li
            onFocus={() => {
                onHover(letter.id);
            }}
            style={{
                backgroundColor :isHighlighted ? 'cyan' : 'white'
            }}
            onPointerMove={() => {
                onHover(letter.id)
            }}
        >
            <button
                onClick={() => {onButtonClick(letter)}}
            >
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>{' '}
            {letter.subject}

        </li>
    )
}