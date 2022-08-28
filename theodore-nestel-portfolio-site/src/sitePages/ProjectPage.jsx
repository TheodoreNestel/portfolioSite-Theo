import React, { useState, useLayoutEffect, useRef } from "react"
import bemify2 from "../utility/bemify"
import LinkOrb from "../components/LinkOrb";
import projectData from "../data/projects.json"
import Card from "../components/Card"
import useClickOut from "../utility/useClickOut";
import anime from "animejs";
import { useEnter ,useExit } from "../utility/useAnimation";

const bem = bemify2("page")



function ProjectPage(props) {

    //massive rework. Now the cards are displayed immediatly and are in a scrollable div 

    const container = useRef()

   

    useEnter(()=>{

        const scrollingDiv = container.current
        const cards = container.current.querySelector('.card')

        anime.timeline({
            easing: "easeOutCubic",
            duration: 500
        }).add({
            targets: scrollingDiv,
            opacity : [0, 1],
            scale: [0.7, 1],
            translateY: [-100,0],
            duration: 400
        })
        
        
        
        
    })


    useExit('page' ,()=>{

        const scrollingDiv = container.current
        const cards = container.current.querySelector('.card')

        const timeLine = anime.timeline({
            easing: "easeOutCubic",
            duration: 500
        }).add({
            targets: scrollingDiv,
            opacity : [1, 0],
            scale: [1, 0.7],
            translateY: [-100],
            duration: 400
        })
        
        console.log("useExit projectpage")
        
        timeLine.play();
        return timeLine.finished
    })
   
    return (
        <div className={bem()}>

            <div ref={container} className={bem('container','--projects')}>
                         
                    <div className={bem('card','--container')}>
                        {projectData.map((project)=>(
                            <Card {...project} />
                        ))}
                    </div>


            </div>

        </div>
    )
}


export default ProjectPage;