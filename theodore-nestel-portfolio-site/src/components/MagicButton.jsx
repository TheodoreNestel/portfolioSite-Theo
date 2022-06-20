import React from "react";
import bemify2 from "../utility/bemify";

const bem = bemify2("magicButton")
//this will take a string pased on one of our pages and from there know what possible directions a use can take

//all possible directions 
const pageDirection = {
    MainPage : ["ContactPage" , "AboutPage" ,"ProjectPage"],
    ContactPage : ["MainPage"],
    AboutPage : ["MainPage"],
    ProjectPage : ["MainPage"]
}

//need to style this to look pretty but working nav lets go 
function MagicButton(props){

let currentOptions = pageDirection[props.currentPage]
console.log(currentOptions)


    return (
       <div className={bem()}>
            {currentOptions.map((pageNav)=>{
            return <button className={bem(pageNav)} onClick={()=>props.changePage(pageNav)} key={pageNav}> {pageNav} </button>
        })}
       </div>
    )
}


export default MagicButton
