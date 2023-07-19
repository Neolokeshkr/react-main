import { useState } from "react";
export default function Pointer(){

    const [position, setPosition] = useState({x:30, y:30});

    return(
        <div
            onPointerMove={e => {
                setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
            }}
            style={{
                position: 'relative',
                width: '50vw',
                height: '50vh',
                border: '1px solid black',
                left: '30px',
                top:'30px'
            }}>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius:'50%',
                    transform:`translate(${position.x}px,${position.y}px)`,
                    left: '-40px',
                    top: '-40px',
                    width: '20px',
                    height: '20px',
                }}
            />
        </div>
    )
}