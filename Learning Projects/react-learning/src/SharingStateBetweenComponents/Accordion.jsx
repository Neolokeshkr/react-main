import { useState } from "react"

export default function Accordion() {

    const [isActive, setIsActive] = useState('0')

    function handleShowClick() {
        isActive === '0' ? setIsActive('1') : setIsActive('0')
    }

    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title={'About'} isActive={isActive === '0'} onShow={() => {handleShowClick()}}>
                {`With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.`}
            </Panel>
            <Panel title={'Etymology'} isActive={isActive === '1'} onShow={() => {handleShowClick()}}>
                {`The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.`}
            </Panel>

        </>
    )
}

function Panel({ title, children, isActive, onShow }) {
    return (
        <section
            style={{
                border: '1px solid grey'
            }}>

            <h2>{title}</h2>
            {
                isActive && <p>
                    {children}
                </p>
            }
            { !isActive && <button onClick={onShow}>Show</button>}
        </section>
    )
}