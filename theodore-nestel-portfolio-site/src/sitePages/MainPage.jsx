import React from "react"
import bemify2 from "../utility/bemify"
import useExitAnim from "../utility/useExitAnim";


const bem = bemify2("page");





function MainPage(){

    useExitAnim("page", async ()=>{
        //exit anim logic goes in here
    } )

    return (
        <div className={bem()}>
            <div className={bem("container","--mainTitle")}>
                    <h1>Theodore Nestel</h1>
            </div>
        </div>  
    )
}


export default MainPage;