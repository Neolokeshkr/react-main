import React from "react";

export default function Parent() {
    return(
        <div>
            <h1>Parent Component</h1>
            {/* <ChildrenComponent style={{color:'red'}} title='Lokesh'/> */}
            <ChildrenComponent color='red' title='Children'/>
        </div>
    )
}

function ChildrenComponent({style, title, color}){
    return(
        <div style={{color: color}}>
            <h2>{title} Component</h2>
        </div>
    )
}