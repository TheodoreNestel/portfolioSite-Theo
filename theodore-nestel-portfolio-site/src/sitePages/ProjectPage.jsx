import React from "react"
import bemify2 from "../utility/bemify"
import LinkOrb from "../components/LinkOrb";

const bem = bemify2("ProjectPage");

//I dont think this needs more than this I could be wrong **


function ProjectPage(props){
    return (
        <>
        
        <LinkOrb props0={"add data here for project 1"}/>

        <LinkOrb props1={"add data here for project 2"}/>

        <LinkOrb props2={"add data here for project 3"}/>

        </>
    )
}


export default ProjectPage;