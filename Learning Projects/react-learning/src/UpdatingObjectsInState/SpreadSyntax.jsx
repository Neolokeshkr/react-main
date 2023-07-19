import { useState } from "react";

export default function SpreadSyntax(){

const [person, setPerson] = useState({
    firstName: 'Lokesh',
    lastName: 'Kumar',
    email:'neolokeshkr@gmail.com'
})

function handleFirstNameChange(e){
    setPerson({
        ...person,
        firstName: e.target.value
    })
    console.log(Object.entries(e.target));
}
function handleLastNameChange(e){
    setPerson({
        ...person,
        lastName: e.target.value
    })
}
function handleEmailChange(e){
    setPerson({
        ...person,
        email: e.target.value
    })
}

function handleChange(e){
    setPerson({
        ...person,
        [e.target.name]: e.target.value 
    })
}

    return(
        <>
            <label>
                First Name
                <input onChange={handleChange} value={person.firstName} name="firstName"></input>
            </label>
            <label>
                Last Name
                <input onChange={handleChange} value={person.lastName} name='lastName'></input>
            </label>
            <label>
                Email Id
                <input onChange={handleChange} value={person.email} name="email"></input>
            </label>
            <p> {person.firstName} {person.lastName} ({person.email})   </p>
        </>
    )
}