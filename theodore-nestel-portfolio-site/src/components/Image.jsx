import React from "react"; 
import bem2 from "../utility/bemify"

const bem = bem2("image");

//Props for this are an img this returns an img element with the image classname 
function Image(props){
    return(
        <img className={bem()}  src={props.image}/>
    )
}


export default Image;