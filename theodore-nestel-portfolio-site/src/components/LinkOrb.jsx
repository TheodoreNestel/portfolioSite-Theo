import React from "react"
import bemify2 from "../utility/bemify"


//structure key should be identical to file name to reduce confusion
const favIcons ={
    foxBoyIcon : "./foxBoyIcon.png",
    pokemonIcon : "./pokemonIcon.png"
}


const bem = bemify2("linkorb")

//This will most likely render a card with information but I am unsure if we are using this load it 
//or if we are doing it some other way**

//on click summons a card component 

//clicking off the card closes it 

//clicking the button opens it 


function LinkOrb(props){
    return (
        <button className={bem()}
        onClick={props.onClick}>    
        <img 
        src={favIcons[props.icon]}
        className={bem("favIcon")}
        />

        </button>
    )
}


export default LinkOrb;