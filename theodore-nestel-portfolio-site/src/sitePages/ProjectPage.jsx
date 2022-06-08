import React, { useState, useLayoutEffect, useRef } from "react"
import bemify2 from "../utility/bemify"
import LinkOrb from "../components/LinkOrb";
import projectData from "../data/projects.json"
import Card from "../components/Card"
import useClickOut from "../utility/useClickOut";
import anime from "animejs";


function ProjectPage({ changePage }) {

    // A flag vaiable to determine the state of animations
    const isAnimating = useRef(false)

    // Keep track of current card HTML element, without re-rendering
    const cardContainerRef = useRef()

    // Keep track of current animation timeline
    const timeline = useRef()

    // Handle State to control the card
    const [selectedProject, setSelectedProject] = useState()

    // Handle Animation
    const animateCard = async (direction) => {

        // If animation is already running, do nothing
        if (isAnimating.current) return

        // Set animation flag
        isAnimating.current = true

        const card = cardContainerRef.current.querySelector(".card")
        const content = card.querySelectorAll(".card__title, .card__content > p, .card__links > li")
        const image = card.querySelector(".card__image > img")

        // Create Custom Object to animate
        const blurObject = { blur: 50 }
        image.style.filter = `blur(${blurObject.blur}px)`

        if (direction === "in" || !timeline.current) {

            // Create Timeline
            timeline.current = anime.timeline({
                easing: "easeOutCubic",
                duration: 500,
                autoplay: false
            })
            .add({
                targets: card,
                opacity: [0, 1],
                scale: [0.7, 1],
                duration: 400
            })
            .add({
                targets: content,
                opacity: [0, 1],
                translateY: [anime.stagger(50, {direction: 'reverse'}), 0],
                delay: anime.stagger(150),
                duration: 200
            })
            .add({
                targets: blurObject,
                blur: [50, 0],
                duration: 1000,
                update() {
                    image.style.filter = `blur(${blurObject.blur}px)`
                }
            }, "-=600")
            
        } 
    
        else {
            timeline.current.reverse()
        }

        // Play animation
        timeline.current.play();
    
        // Return Promise
        await timeline.current.finished;

        // Reset animation flag
        isAnimating.current = false
    }

    // Handle Card Exit
    useClickOut(".card , .linkorb", async () => {

        // If an animation is running then dont do anything
        if (isAnimating.current || !selectedProject) return;

        // Wait for animation to complete
        await animateCard("out")

        // Finally after the animation is complete, update state to remove the card
        setSelectedProject(null)

    }, [selectedProject])

    // Handle Card Enter with useLayoutEffect
    useLayoutEffect(() => {

        // If nothing is selected, return
        if (!selectedProject || isAnimating.current) return;

        // Trigger animation in
        animateCard("in")

    }, [selectedProject]) 

    return (
        <div className="projects">
            <div style={{
                marginBottom: "2.4rem",
                display: "flex",
                gap: "1.6rem",
            }}>
                {projectData.map((project, key) => (
                    <LinkOrb
                        key={key}
                        onClick={() => !isAnimating.current && setSelectedProject(project)}
                        title={project.title}
                    />
                ))}
            </div>
            {selectedProject && (
                <div ref={cardContainerRef}>
                    <Card {...selectedProject} />
                </div>
            )}
        </div>
    )
}


export default ProjectPage;