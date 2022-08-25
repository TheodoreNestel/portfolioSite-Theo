import React, { useRef } from "react"
import bemify2 from "../utility/bemify"
import { useEnter, useExit } from "../utility/useAnimation";
import anime from "animejs";
import data from "../data/home.json"


const bem = bemify2("page");


function MainPage(){

    // Create Refs for animations
    const titleRef = useRef()
    const tldr = useRef()

    // Enter Animation
    useEnter(() => {

        anime({
            targets: titleRef.current,
            opacity: [0, 1],
            scale: [0,1],
            duration: 1500,
            easing: "easeOutCubic",
            delay: 1000
        })
        anime({
            //this still needs to be styled but id like more coaching on proper styling 
            //this will be hidden and appear by moving down from behind the main title
            targets: tldr.current,
            duration: 1500,
            easing: "easeOutCubic",
            translateY : '100px',
            opacity: [0, 1],
            delay: 1000
        })

    })

    // Exit animation
    useExit("page", () => {

        //exit anim logic goes in here
        const timeline = anime.timeline({
            duration: 500,
            easing: "easeOutCubic",
        })

        timeline.add({
            targets: titleRef.current,
            opacity: 0,
            scale : 0
        }).add({
            targets : tldr.current,
            translateY : '-100px',
            opacity : 0
        })

        // Return timeline promise
        return timeline.finished

    })

    //return just our main Title 
    return (
        <div className={bem()}>
            <div className={bem("container","--mainTitle")}>
                <h1 ref={titleRef}>{data.title}</h1>
                <h4 ref={tldr}>{data.cta}</h4>
            </div>
        </div>  
    )
}


export default MainPage;