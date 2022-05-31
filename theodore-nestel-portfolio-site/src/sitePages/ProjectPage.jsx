import React, { useState } from "react"
import bemify2 from "../utility/bemify"
import LinkOrb from "../components/LinkOrb";
import projectData from "../data/projects.json"
import Card from "../components/Card"
import useClickOut from "../utility/useClickOut";


const bem = bemify2("ProjectPage");

//I dont think this needs more than this I could be wrong **


function ProjectPage({ changePage }) {

    const [selectedProject, setSelectedProject] = useState()
    useClickOut(".card , .linkorb" , () => setSelectedProject(null))

    return (
        <div>
            {projectData.map((project, key) => {
                return <LinkOrb key={key} onClick={(e) => {
                    setSelectedProject(project)
                }} />
            })}
            {selectedProject && (
                <div>
                   <Card {...selectedProject}/>
                </div>
            )}

        </div>
    )
}


export default ProjectPage;