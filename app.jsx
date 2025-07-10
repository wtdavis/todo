import React from "react"
import { createRoot } from "react-dom/client"


function Root () {
    
    let root = createRoot(document.getElementById('root'))
    root.render(App())
};

function App () {
    return (
        <>
        <h1 class="">ToDo ToDoDo</h1>
        </>
    
    )
}

Root()

