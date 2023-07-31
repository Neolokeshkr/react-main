import { useState } from "react"

export default function CityQuiz({ children }) {

    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('empty')



    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setError(null);
        try {
            await submitForm(answer);
            setStatus('success')
        }
        catch(err) {
            setStatus('empty');
            setError(err)
            // console.log(err)
         }
        setAnswer('')
    }

    if(status==='success'){
        return(<h2>That's Right!</h2>)
    }

    return (
        <>
            <h2>{children}</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>

            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => {setAnswer(e.target.value); setStatus('typing')}} value={answer} disabled={status==='submitting'}>

                </textarea>
                <br />
                <button type="submit" disabled={answer === '' || status==='submitting'}>Submit</button>
            </form>
            {
               error != null && <p style={{color:'red'}}>{error.message}</p>
            }
            {
                status === 'submitting' && <p style={{color:'orange'}}>Loading...</p>
            }
        </>

    )

    function submitForm(answer) {
        // Pretend its hitting the network
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let shouldError = answer.toLowerCase() !== 'lima';

                shouldError ?
                    reject(new Error('Thats Wrong! Try Again Douchebag %$%$%')) :
                    resolve()

            }, 1500);
        })
    }
}