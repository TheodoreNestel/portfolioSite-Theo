import React, { useState, useEffect, useRef } from "react"
import bemify2 from "../utility/bemify"
import LinkOrb from "../components/LinkOrb";
import projectData from "../data/projects.json"
import Card from "../components/Card"
import useClickOut from "../utility/useClickOut";
import anime from "animejs";


const bem = bemify2("ProjectPage");

//I dont think this needs more than this I could be wrong **

const animateCard = (card, direction) => {
    // Create Timeline
    const timeline = anime.timeline({});

    // Add things to timeline
    timeline.add()

    // Return Promise
    return timeline.finished;
}


function ProjectPage({ changePage }) {

    // A flag vaiable to determine the state of animations
    const isAnimating = useRef(false)

    // Keep track of current card HTML element, without re-rendering
    const cardRef = useRef()

    // Handle State to control the card
    const [selectedProject, setSelectedProject] = useState()

    // Handle Card Exit
    useClickOut(".card , .linkorb", async () => {

        // If an animation is running then dont do anything
        if (isAnimating.current) return;

        // Set animation to running
        await animateCard(cardRef.current, "out")

        // Finally after the animation is complete, update state to remove the card
        setSelectedProject(null)

    })

    // Handle Card Enter with useEffect
    useEffect(() => {

        // If nothing is selected, return
        if (!selectedProject) return;

        // Trigger animation in
        animateCard(cardRef.current, "in")

        // Set isAnimating to true
        isAnimating.current = true;

    }, [selectedProject]) 

    return (
        <div>
            {projectData.map((project, key) => {
                return <LinkOrb key={key} onClick={(e) => {
                    if (isAnimating.current) return;
                    setSelectedProject(project)
                }} />
            })}
            {selectedProject && (
                <div ref={cardRef}>
                    <Card {...selectedProject} />
                </div>
            )}
        </div>
    )
}


export default ProjectPage;