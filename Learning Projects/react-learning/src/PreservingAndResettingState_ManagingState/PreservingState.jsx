import { useState } from "react"

export default function PreservingState() {

    const [disableCounter, setDisableCounter] = useState(false);
    const [changeComponent, setChangeComponent] = useState(false);
    const [nextPlayer, setNextPlayer] = useState(false);
    const [player, setPlayer] = useState('Lokesh');

    return (
        <div className="dark">
            <h2>State is tied to a position in the tree
            </h2>
            <Counter children={'Lokesh Score'} />
            {
                !disableCounter ? <Counter children={'Ayush Score'} /> :
                    <p>State Destroyed  for Second Component</p>
            }
            <br />
            <label name="checkbox">
                <input
                    type='checkbox'
                    onChange={() => { setDisableCounter(!disableCounter) }}
                />
                Disable Player
            </label>
            <hr />

            <h2>Same component at the same position preserves state </h2>
            {
                changeComponent ? <Counter children={'Lokesh Score'} /> : <Counter children={'Ayush Score'} />
            }

            <br />
            <label>
                <input type="checkbox" onChange={() => { setChangeComponent(!changeComponent) }} />
                Change Component
            </label>
            <hr />

            <h2>Resetting state at the same position
            </h2>
            <h3>
                1. Render components in different positions
            </h3>
            {nextPlayer && <Counter children={'Lokesh Score'} />}
            {!nextPlayer && <Counter children={'Ayush Score'} />}
            <br />
            <button onClick={() => { setNextPlayer(!nextPlayer) }}>
                Next player
            </button>
            <hr />

            <h3>2. Resetting state with a key </h3>
            {
                player === 'Lokesh' ? 
                <Counter children={`${player} score`} key={player} /> :
                <Counter children={`${player} score`} key={player} />
            }
            <br/>
            <button onClick={() => ( player === 'Lokesh' ?
                setPlayer('Ayush'):
                setPlayer('Lokesh')
            )}>
                Next player
            </button>
            


        </div>

    )
}

function Counter({ children}) {
    const [counter, setCounter] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#547194');

    function handleCounter(e) {
        setCounter(counter => counter + 1)
    }

    return (
        <div style={{
            display: 'inline-block',
            justifyContent: 'center',
            textAlign: 'center',
            border: '1px solid black',
            marginLeft: '20px',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor
        }}
            className="hover"
            onPointerEnter={() => { setBackgroundColor('#A3EEE4') }}
            onPointerLeave={() => { setBackgroundColor('#547194') }}
        >
            <h3>{children}</h3>
            <h2>{counter}</h2>
            <button onClick={handleCounter}>
                +1
            </button>
        </div>
    )
}