import { useState } from "react"

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

export default function Menu() {

    const [menuList, setMenuList] = useState(initialItems);
    const [pickedItem, setPickedItem] = useState('nothing');
    const [status, setStatus] = useState('Pending');
    const [error, setError] = useState(null);

    function handleClick(item, e) {
        let newPickedItem = menuList.find(menuItem => menuItem === item);
        setPickedItem(newPickedItem.title);
    }

    function handleChange(e, item) {
        setMenuList(
            menuList.map(menuItem => menuItem === item ?
                {
                    ...item,
                    title: e.target.value
                } :
                menuItem
            )
        )
    }

    async function handlePlaceOrder() {
        setStatus('processing')
        setError(null);
        try {
            await placeOrderRequest(pickedItem)
            setStatus('orderSucessful')
        } catch (error) {
            setError(error.message)
            setStatus('pending')
        }
    }

    if(status === 'orderSucessful'){
        return <h2 style={{color:'green'}}>Order Placed Sucessfully for {pickedItem}</h2>
    }


    return (
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {
                    menuList.map(item => (
                        <li key={item.id}>
                            <input
                                value={item.title}
                                onChange={e => handleChange(e, item)}
                            />
                            {' '}
                            {item.title}{' '}
                            <button onClick={e => handleClick(item, e)}>
                                Pick
                            </button>
                        </li>
                    ))
                }
            </ul>
            {
                <p>You have picked {pickedItem}</p>
            }
            <button onClick={handlePlaceOrder}>
                Place Order!
            </button>
            {
                status === 'processing' && !error && <h3 style={{color:"orange"}}>Processing Order...</h3>
            }
            {
                error && <h3 style={{color:'red'}}>{error} <br />Can't Place Order. Please pick one item!!</h3>
            }


        </>

    )
}

// Faking Network Call
function placeOrderRequest(pickedItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (pickedItem === 'nothing') ? reject(new Error('You have no selection')) : resolve()
        }, 2000);
    })
}