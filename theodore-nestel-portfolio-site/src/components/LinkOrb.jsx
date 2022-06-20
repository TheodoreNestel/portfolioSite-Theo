import React from "react"
import bemify2 from "../utility/bemify"



const bem = bemify2("linkorb")

//This will most likely render a card with information but I am unsure if we are using this load it 
//or if we are doing it some other way**

//on click summons a card component 

//clicking off the card closes it 

//clicking the button opens it 


function LinkOrb(props){
    return (
        <button className={bem()} onClick={props.onClick} ><h5>preview</h5></button>
    )
}


export default LinkOrb;