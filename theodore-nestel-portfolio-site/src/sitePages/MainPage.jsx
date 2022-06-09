import React from "react"
import bemify2 from "../utility/bemify"

const bem = bemify2("MainPage");

//I dont think this needs more than this I could be wrong **


function MainPage(props){
    return (
        <div className={bem()}>

    <h1>Theodore Nestel</h1>
    
        </div>  
    )
}


export default MainPage;