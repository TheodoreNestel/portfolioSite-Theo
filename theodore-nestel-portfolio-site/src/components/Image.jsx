import React from "react"; 
import bem2 from "../utility/bemify"

const bem = bem2("image");

//this one is pretty simple a regular old component that loads an image there isnt much else to it

function Image(props){



    return(
        <img className={bem()}  src={props.image}/>
    )
}


export default Image;