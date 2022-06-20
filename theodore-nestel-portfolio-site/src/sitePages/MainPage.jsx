import React from "react"
import bemify2 from "../utility/bemify"

const bem = bemify2("page");

//I dont think this needs more than this I could be wrong **


function MainPage(){
    return (
        <div className={bem()}>
            <div className={bem("container","--mainTitle")}>
                    <h1>Theodore Nestel</h1>
            </div>
        </div>  
    )
}


export default MainPage;