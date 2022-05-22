import React from "react"
import bemify2 from "../utility/bemify"


const bem = bemify2("linkorb")

//This will most likely render a card with information but I am unsure if we are using this load it 
//or if we are doing it some other way**

function LinkOrb(props){
    return (
        <button className={bem()}>Im not sure how this will work just yet</button>
    )
}


export default LinkOrb;