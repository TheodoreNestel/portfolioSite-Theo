import React from "react"
import bemify2 from "../utility/bemify"

const bem = bemify2("cta");

//I dont think this needs more than this I could be wrong **


function Cta(props){
    return <h2 className={bem()}>{props.cta}</h2>
}


export default Cta;