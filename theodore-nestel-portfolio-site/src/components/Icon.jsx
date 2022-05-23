import React from "react"
import bemify2 from "../utility/bemify";

const bem = bemify2("icon")


function Icon({icon}){

    return(
        <ion-icon className={bem()} name={icon}></ion-icon>
    )
}


export default Icon;