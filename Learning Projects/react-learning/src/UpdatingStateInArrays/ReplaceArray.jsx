import { useImmer } from "use-immer";

export default function ReplaceArray(){

    const [initialCounters, setInitialCounters] = useImmer([0,0,0])

    function handleIncrement(index){
        setInitialCounters(
            initialCounters.map( (counter, ind) => (
                ind === index ? counter +1 : counter
            ))
        )
    }

    return(
        <ul>
            {
                initialCounters.map((counters, index) => 
                <li key={index}>
                    {counters}
                    <button onClick={() => handleIncrement(index)}>
                        +1
                    </button>
                </li>)
            }
        </ul>
    )
}