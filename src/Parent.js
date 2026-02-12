import React from 'react'
import { useState } from 'react';

export function Parent() {

    const [msg, setMsg] = useState('You can do it .');

    return (
        <div style={{ 
            backgroundColor: "black", 
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white"
        }}>

            <div>Parent Component</div>
            <p>Message is {msg}</p>

        </div>
    )
}
