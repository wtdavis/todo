import React, { useState } from "react"

function List () {
    
    // fetch list of items

    // sort list by relevance/ selected field/ visible

    // turn list into <li> under a <ul>

    let listArr = ["thing one", "thing two", "thing three", "thing four", "Danielle MacCollough"]
    
    let listItems = listArr.map(
        (arrItem, index) => {
            return (
                <li key={index}> 
                    {arrItem}
                </li>
            )
        }
    )

1
2
444
3
4
6
5
4

    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>

    )

}

export default List

444