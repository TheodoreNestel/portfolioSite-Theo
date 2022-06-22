import React, { useRef } from "react"
import bemify2 from "../utility/bemify"
import { useEnter, useExit } from "../utility/useAnimation";
import anime from "animejs";


const bem = bemify2("page");


function MainPage(){

    // Create Refs for animations
    const titleRef = useRef()

    // Enter Animation
    useEnter(() => {

        anime({
            targets: titleRef.current,
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutCubic"
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
            opacity: 0
        })

        // Return timeline promise
        return timeline.finished

    })

    return (
        <div className={bem()}>
            <div className={bem("container","--mainTitle")}>
                <h1 ref={titleRef}>Theodore Nestel</h1>
            </div>
        </div>  
    )
}


export default MainPage;