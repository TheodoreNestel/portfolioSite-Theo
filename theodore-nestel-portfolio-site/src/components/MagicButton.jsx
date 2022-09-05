import React, { useState, useRef, useLayoutEffect } from "react";
import bemify2 from "../utility/bemify";
import { useAnimation } from "../utility/useAnimation";
import anime, { timeline } from "animejs";
import { useTransition } from "../THREEjs";

const bem = bemify2("magicButton")


//based on currentPage string we return an array of possible pages to navigate to 
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


//returns our nav and the animations attached to it
function MagicButton(props) {

    const isAnimating = useRef(false)

    let currentOptions = pageDirection[props.currentPage] //this sets up our current nav options
    //by setting currentPage to an array of all possible pages you can navigate to from it  


    //this is the code that jebaits react into runing a final animation before unmounting the last component
    const animation = useAnimation(); //this uses closures to remember what the exit anim we set on the last page
    //useAnimations will have the animation logic stored inside it we then call it below inside an Onclick 


    return (
        <div className={bem()}>



            <div className={bem("explore")}>
                <h5 className='prebuttonTitleText'>Hover me</h5>
                <div className="preButtonTitle"></div>
            </div>


            <div className={bem('panel')}>
                <div className={bem("buttons", [currentOptions.length > 1, "--animated"])}>
                    {currentOptions.map((pageNav) => (
                        <button
                            key={pageNav}
                            className={bem(pageNav)}
                            onClick={async () => {
                                if (isAnimating.current) return
                                isAnimating.current = true
                                animation.ringu()
                                await animation?.page()
                                await animation?.space(pageNav)
                                props.changePage(pageNav)
                                isAnimating.current = false

                            }}>
                            {cleanPageNames[pageNav]}
                        </button>
                    )
                    )}

                </div>
               { /* <img src="https://territorystudio.com/wp-content/uploads/2020/03/Screen_C_Loop_v001.gif" /> */}
            </div>


        </div>
    )
}


//the onClick above is on each button which will have its own eventlistener ready to change the page to 
//the button's key which is its page 


export default MagicButton





//I want to have the nav show "Explore" and when moused over to expand into the nav menu
//I can maybe use an onmouseover function on the element to achieve this 


//animateNav(); 