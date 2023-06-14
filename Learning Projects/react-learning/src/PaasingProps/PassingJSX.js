import React from "react";

function Avatar() {
    return (
        <>
            <h1>Avtar Component</h1>
        </>
    )
}

function Card({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default function PassingJSX() {
    return (
        <>
            <Card>
                <Avatar />
            </Card>
            <Card>
                Lokesh
            </Card>
        </>
    )
}