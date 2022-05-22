import React from "react"
import bemify2 from "../utility/bemify";

const bem = bemify2("icon")


function Icon({icon}){

    return(
        <div className={bem()}></div>
    )
}


export default Icon;