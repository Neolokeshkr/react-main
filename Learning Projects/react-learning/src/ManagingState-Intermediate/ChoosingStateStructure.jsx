import { useState } from "react"

export default function PointerMove(){

    const [position, setPosition] = useState({x:0, y:0})

    return(
        <div style={{
            position:'relative',
            height:'100vw',
            width:'100vh',
            border:'2px solid red'
        }}
            onPointerMove={(e) => {
                setPosition({x:e.clientX, y:e.clientY})
            }}

        >
            <div style={{
                position:"absolute",
                width:'20px',
                height:'20px',
                backgroundColor:'red',
                borderRadius:'50%',
                transform: `translate(${position.x}px, ${position.y}px)`
            }}>

            </div>
        </div>
        )
}