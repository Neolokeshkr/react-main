import { useState } from "react";

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function TransformArray() {

    const [shapes, setShape] = useState(initialShapes)

    function handleMoveCircle(){
        setShape(
            shapes.map(shape => shape.type === 'circle' ? {...shape, y : shape.y + 50} : shape)
        )
    }

    return (
        <>
            <button onClick={handleMoveCircle}>Move Circles Down</button>

            {
                shapes.map(shape => (
                    <div
                        key={shape.id}
                        style={{
                            backgroundColor: 'purple',
                            position: 'absolute',
                            width: '20px',
                            height: '20px',
                            borderRadius: shape.type === 'circle' ? '50%' : '',
                            left: shape.x,
                            top: shape.y    
                        }}
                    >

                    </div>
                ))
            }
        </>

    )
}