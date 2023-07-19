// Create actions that define the actions types and payloads (e.g., actions.js):

export const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}