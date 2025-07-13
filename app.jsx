import { createRoot } from "react-dom/client"
import "./src/main.css"
import Hero from "/src/Hero.jsx"
import List from "/src/List.jsx"
import React from "react"

function Root () {
    
    let root = createRoot(document.getElementById('root'))
    root.render(App())
};

function App () {
    return (
        <>
            <h1 className="test-header header">ToDo ToDoDo</h1>
            <Hero/>
            <List/>

        </>
    
    )
}

Root()

