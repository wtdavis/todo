import React, { useState } from "react"

function List () {
    
    // fetch list of items

    // sort list by relevance/ selected field/ visible

    // turn list into <li> under a <ul>

    let listArr = ["thing one", "thing two", "thing three", "thing four"]
    
    let listItems = listArr.map(
        (arrItem) => {
            return (
                <li> 
                    {arrItem}
                </li>
            )
        }
    )

    return (
        <>
            

        </>

    )

}

