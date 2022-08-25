import React, {useRef} from "react"
import bemify2 from "../utility/bemify"
import Card from "../components/Card";
import contactData from "../data/contact.json"
import { useEnter, useExit } from "../utility/useAnimation";
import anime, { timeline } from "animejs";


const bem = bemify2("page");


function ContactPage(props){

    //this keeps track of what element we are running all the animations from and where to start 
    //our queries for children animations
    const container = useRef();

    //a hook we wrote that lets use pass in an animation to be run 
    //this runs before the component is rendered
    useEnter(()=>{

        //the children element in our card Component one which we will set animations
        const card = container.current.querySelector(".card")
        const content = card.querySelectorAll(".card__title, .card__content > p, .card__links > li")

        //the time line for animations  
        anime.timeline({
            easing: "easeOutCubic",
            duration: 500
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

    })


    //this lets us set an animation to be run after the component unmounts 
    //we set it here and use closures to keep track of it when we trigger it in the 
    //MagicButton component
    useExit('page' ,()=>{

        const card = container.current.querySelector(".card")
        const content = card.querySelectorAll(".card__title, .card__content > p, .card__links > li")
        
            
                  const timeLine = anime.timeline({
                    easing: "easeOutCubic",
                    duration: 500,
                    autoplay : false
                })
                .add({
                    targets: content,
                    opacity: 0,
                    translateY: [anime.stagger(50), 0],
                    delay: anime.stagger(150),
                    duration: 200
                })
                .add({
                    targets: card,
                    opacity: 0,
                    scale: 0.7,
                    duration: 400
                })
                

                
                timeLine.play();

                return timeLine.finished
    })

    return (
        <div ref={container} className={bem("container")}>

       <Card {...contactData} />

        </div>
    )
}


export default ContactPage;