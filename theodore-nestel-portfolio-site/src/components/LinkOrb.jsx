import React from "react"
import bemify2 from "../utility/bemify"


//For the icons to be instanciated they must be declared in this object here 
//the key and the name of the file must be indentical ex : {img : img.jpg} 
//they must be decaled here before they can be visible on the component 

//all our favicon
const favIcons ={
    foxBoyIcon : "/foxBoyIcon.png",
    pokemonIcon : "/pokemonIcon.png"
}


const bem = bemify2("linkorb")



//we return a button with a custom onClick callback and an img icon both must be passed down in props 
function LinkOrb(props){
    return (
        <div className={bem('linkOrbBox')}>
        <button className={bem()}
        onClick={props.onClick}>    
        <img 
        src={favIcons[props.icon]}
        className={bem("favIcon")}
        />
        </button>
        <p className={bem('LinkOrbTitle')}>{props.title}</p>
        </div>
    )
}


export default LinkOrb;