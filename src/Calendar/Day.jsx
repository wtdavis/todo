import React, { use, useState } from "react";

function Day (probsObj) {
    // a Day should have a day-of-the-week(dotw), date, and to-do objects (?)

    let [date, setDate] = useState()
    let [dotw, setDotw] = useState()
    let [toDoObj, setToDoObj] = useState({})



    return (
        <>
            <div className="day-container">
                <div className="dotw">
                    {dotw}
                    {date}
                    {toDoObj}
                </div>
            </div>
        </>
    )

}

export default Day