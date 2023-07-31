import { useState } from "react"

export default function Feedback({ children }) {

    const [review, setReview] = useState('');
    const [status, setStatus] = useState('typing');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setError(null);

        try {
            await submitForm(review)
            setStatus('successful')
        } catch (err) {
            setStatus('typing')
            setError(err.message)
        }
        setReview('');
    }

    if(status === 'successful'){
        return <p style={{color:'green'}}>Thanks for the feedback!!!</p>
    }

    return (
        <>
            <h2>Review your stay at the {children} Hotel!</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={e => setReview(e.target.value)}
                    disabled={status==='submitting'}
                    value={review}
                ></textarea>
                <br/>
                <button 
                    type="submit"
                    disabled={!review.length || status==='submitting'} 
                >Send Feedback!</button>

                {status === 'submitting' && <p style={{color:'orange'}}>Requesting Server!!</p>}
                { error && <p style={{color:'red'}}>{error}</p>}
            </form>
        </>
    )
}

// Pretending network call
function submitForm(review){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let reviewCheck = review.length;

            reviewCheck < 10 ?
            reject(new Error('Review too short')) :
            resolve()

        }, 5000);
    })
}