import { useState } from "react";

export default function SpreadSyntax() {

    const [person, setPerson] = useState({
        firstName: 'Lokesh',
        lastName: 'Kumar',
        email: 'neolokeshkr@gmail.com',
        address: {
            addLine1: 'Address Line 1',
            addLine2: 'Address Line 2',
            state: {
                city: 'city name',
                postcode: '000000',
            }
        }
    })

    /* function handleFirstNameChange(e){
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
    } */

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    function handleAddLine1Change(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                addLine1: e.target.value
            }
        })
    }
    function handleAddLine2Change(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                addLine2: e.target.value
            }
        })
    }
    function handleCityChange(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                state: {
                    ...person.address.state,
                    city: e.target.value
                }
            }
        })
    }
    function handlePostcodeChange(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                state: {
                    ...person.address.state,
                    postcode: e.target.value
                }
            }
        })
    }

    return (
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
            <br />
            <label>
                Address
                <input onChange={handleAddLine1Change} value={person.address.addLine1} name="addLine1"></input>
                <input onChange={handleAddLine2Change} value={person.address.addLine2} name="addLine2"></input>
                <input onChange={handleCityChange} value={person.address.state.city} name="city"></input>
                <input onChange={handlePostcodeChange} value={person.address.state.postcode} name="postcode"></input>
            </label>
            <div>
                <p>
                    {person.firstName} {person.lastName} ({person.email})
                </p>
                <p>
                    Address:
                    {person.address.addLine1} {person.address.addLine2}
                    {person.address.state.city} {person.address.state.postcode}
                </p>

            </div>
        </>
    )
}