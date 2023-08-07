import { useReducer } from "react";

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
];



export default function ChatMessenger(){

    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.message;
    const contact = contacts.find(c => c.id === state.selectedId)

    return(
        <>
            <ContactList 
                contacts={contacts} 
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat 
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </>
    )
}

function ContactList({contacts, selectedId, dispatch}){
    return(
        <>
            <section className="contact-list">
                <ul>
                    {
                        contacts.map( contact => (
                            <li key={contact.id}>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            {
                                                type:'selectionChanged',
                                                contactId: contact.id
                                            }
                                        )
                                    }}
                                >
                                    {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

function Chat({message, contact, dispatch}){
    return(
        <>
            <section>
                <textarea
                    value={message}
                    placeholder={`Chat to ${contact.name}`}
                    onChange={e => {
                        dispatch({
                            type: 'messageEdited',
                            message: e.target.value
                        })
                    }}
                />
                <br/>
                <button>Send to {contact.email}</button>
            </section>
        </>
    )
}

function messengerReducer(state, action){
    switch(action.type){
        case 'selectionChanged': {
            return {
                ...state,
                selectedId: action.contactId,
                message: ''

            }
        }
        case 'messageEdited': {
            return {
                ...state,
                message: action.message,
            }
        }
        default:{
        throw Error('Unknown action: ' + action.type);
        }
    }
}

export const initialState = {
    selectedId: 0,
    message: 'Hello',
  };