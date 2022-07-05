import React ,{useRef} from "react"
import bemify2 from "../utility/bemify"
import aboutData from "../data/about.json"
import Card from "../components/Card"
import { useEnter, useExit } from "../utility/useAnimation";
import anime, { timeline } from "animejs";

const bem = bemify2("page");

//I dont think this needs more than this I could be wrong **


function AboutPage(props){
    
    
    const container = useRef();

    useEnter(()=>{


    const card = container.current.querySelector(".card")
    const content = card.querySelectorAll(".card__title, .card__content > p, .card__links > li")
    
        
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


    //clean up dupe code dummy

    return (

        <div className={bem()}>
            
            <div ref={container} className={bem("container")}>
            <Card {...aboutData}/>
            </div>

        </div>
    )
}


export default AboutPage;