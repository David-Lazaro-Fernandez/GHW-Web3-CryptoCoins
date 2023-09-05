"use client"
import { useState } from "react"
export default function CatsButton() {
    const [cats, setCats] = useState(0)
    return (
        <>
            <h3>{cats}</h3>
            <button onClick={()=>{setCats(prev=>cats+1)}}>
                    Add more cats
            </button>
        </>
    )
}