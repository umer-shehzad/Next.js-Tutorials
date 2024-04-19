"use client";

import { useState } from "react";

export default function ClientComp () {
    const [name, setName] = useState("");

    console.log("This is a client component");

    return (
        <>
        <h1>Client Component</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <h3>Hello, {name}!</h3>
        </>
    )
}