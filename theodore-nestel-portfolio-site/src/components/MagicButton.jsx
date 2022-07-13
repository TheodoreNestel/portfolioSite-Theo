import React, { useState, useRef, useLayoutEffect } from "react";
import bemify2 from "../utility/bemify";
import { useAnimation } from "../utility/useAnimation";
import anime, { timeline } from "animejs";

const bem = bemify2("magicButton")
//this will take a string pased on one of our pages and from there know what possible directions a use can take

//all possible directions based on the current page 
const pageDirection = {
    MainPage: ["ContactPage", "AboutPage", "ProjectPage"],
    ContactPage: ["MainPage"],
    AboutPage: ["MainPage"],
    ProjectPage: ["MainPage"]
}

//an object that can translate the above object into clean string for display to user
const cleanPageNames = {
    MainPage: "Home",
    ContactPage: "Contact",
    AboutPage: "About",
    ProjectPage: "Works"
}


//need to style this to look pretty but working nav lets go 
function MagicButton(props) {

    const isAnimating = useRef(false);


    ///////////////////////test code////////////////////////////

    //DEPRECATED 

    //state to keep track of our onHover event listener 
    const [hovered, setHovered] = useState(false);



    //the function that runs our nav animation 
    async function animateNav() { //this will need to be async so that we can await the anim's completion 

        if (hovered) return //if we already hovered dont run this 
        //if we are in anim return 

        if (isAnimating.current) return
        //we are animating so iz true 
        isAnimating.current = true

        //the animation logic 
        let testTimeline = anime.timeline({
            easing: "easeOutCubic",
            duration: 500,
            autoplay: false
        }).add({
            targets: ".preButtonTitle",
            opacity: [1, 0],
            scale: 2,
            duration: 600
        }).add({
            targets: ".magicButton",
            backgroundColor: "rgba(113, 113, 134, 0.56)",
            duration: 500
        }).add({
            targets: ".magicButton > button",
            opacity: [0, 1],
            duration: 300
        })

        //we set up our animation so lets play them 
        testTimeline.play();


        //the await call so our code doesnt do anything until our animations are done 
        await testTimeline.finished;
        //we got a hover the animation played so now this remains true 
        setHovered(true);
        isAnimating.current = false;

        ///DEPRECATED ^ 
    }

    


    let currentOptions = pageDirection[props.currentPage] //this sets up our current nav options 


    //this is the code that jebaits react into runing a final animation before unmounting the last component
    const animation = useAnimation(); //this uses closures to remember what the exit anim we set on the last page



    return (
        <div id="test" className={bem()} onMouseOver={() => {}}>


            {currentOptions.length > 1 && (
                <div className={bem("explore")}>
                    <h4 className="preButtonTitle">Explore</h4>
                </div>
            )}


            <div class={bem("buttons", [currentOptions.length > 1, "--animated"])}>
                {currentOptions.map((pageNav) => (
                    <button
                        key={pageNav}
                        className={bem(pageNav)}
                        onClick={async () => {

                            await animation?.page()
                            props.changePage(pageNav)

                        }}>
                        {cleanPageNames[pageNav]}
                    </button>
                )
                )}

            </div>


        </div>
    )
}



export default MagicButton





//I want to have the nav show "Explore" and when moused over to expand into the nav menu
//I can maybe use an onmouseover function on the element to achieve this 


//animateNav(); 