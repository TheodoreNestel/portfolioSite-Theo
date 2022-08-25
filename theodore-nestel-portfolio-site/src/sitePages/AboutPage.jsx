import React ,{useRef} from "react"
import bemify2 from "../utility/bemify"
import aboutData from "../data/about.json"
import Card from "../components/Card"
import { useEnter, useExit } from "../utility/useAnimation";
import anime, { timeline } from "animejs";

const bem = bemify2("page");



// About page logic 
function AboutPage(){
    
    //We store the div the data is in inside a useRef
    const container = useRef();

    //we run our enter animation for when the component mounts 
    useEnter(()=>{

    //we select our card class 
    const card = container.current.querySelector(".card")
    //we select the children on the card class
    const content = card.querySelectorAll(".card__title, .card__content > p, .card__links > li")
    //To look at the markeup of Card check card.jsx
    
        
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

    //the animation logic for component unmount 
    useExit("page",()=>{

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


    //return a card component loaded with the correct data 
    return (

        <div className={bem()}>
            <div ref={container} className={bem("container" , '--about')}>
            <Card {...aboutData}/>
            </div>
        </div>
    )
}


export default AboutPage;