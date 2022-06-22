import React from "react";
import bemify2 from "../utility/bemify";
import useExitAnim from "../utility/useExitAnim";
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

    //this is the code that jebaits react into runing a final animation before unmounting the last component
    const animation = useExitAnim();

    return (
       <div className={bem()}>
            {currentOptions.map((pageNav)=>{
            return <button className={bem(pageNav)} onClick={()=>props.changePage(pageNav)} key={pageNav}> {pageNav} </button>
        })}
       </div>
    )
}


export default MagicButton
