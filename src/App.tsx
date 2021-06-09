import * as React from 'react'
import { useEffect, useState } from 'react'

export function App() {
    const [apiResponse, setApiResponse] = useState<string>()
    useEffect(() => {
        fetch('http://localhost:4000/')
            .then((res) => res.text())
            .then((res) => setApiResponse(res))
            .catch((err) => err)
    }, [])

    return (
        <div className="app">
            <h1>Hello world React!</h1>
            <p>{apiResponse}</p>
        </div>
    )
}
