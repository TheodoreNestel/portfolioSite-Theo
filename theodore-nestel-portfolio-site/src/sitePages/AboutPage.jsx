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
    const aboutContainer = container.current
    
    //we run our enter animation for when the component mounts 
    useEnter(()=>{

    const aboutContainer = container.current
    const aboutBox = container.current.querySelector('.page__about--abouttitleandtextbox')
    const theoAndHarlow = container.current.querySelector('.page__about--img')
    const highlight = container.current.querySelector('.page__about--highlight')

    console.log(aboutContainer)
    anime.timeline({
        easing: "easeOutCubic",
        duration: 500
    }).add({
        targets: aboutContainer,
        opacity : [0, 1],
        scale: [0.7, 1],
        translateY: [-100,0],
        duration: 400
    }).add({
        targets: aboutBox,
        opacity: [0 ,1],
        translateY : [-100,0],
        delay: anime.stagger(150),
        duration: 200
    })
    .add({
        targets: theoAndHarlow,
        opacity: [0,1],
        translateX : [100,0],
        duration: 400
    }).add({
        targets : highlight,
        opacity: [0,1],
        translateX : [-100 ,0],
        duration: 400
    })
    
    })

    //the animation logic for component unmount 
    useExit("page",()=>{

        const aboutContainer = container.current
        const aboutBox = container.current.querySelector('.page__about--abouttitleandtextbox')
        const theoAndHarlow = container.current.querySelector('.page__about--img')
        const highlight = container.current.querySelector('.page__about--highlight')
        
            
                  const timeLine = anime.timeline({
                    easing: "easeOutCubic",
                    duration: 500,
                    autoplay : false
                })
                .add({
                    targets: aboutBox,
                    opacity: 0,
                    translateY : '-100px',
                    delay: anime.stagger(150),
                    duration: 200
                })
                .add({
                    targets: theoAndHarlow,
                    opacity: 0,
                    translateX : 100,
                    duration: 400
                }).add({
                    targets : highlight,
                    opacity: 0,
                    translateX : -100,
                    duration: 400
                }).add({
                    targets: aboutContainer,
                    opacity : 0,
                    scale: [1, 0.7],
                    translateY: -100,
                    duration: 400
                })
                

                
                timeLine.play();

                return timeLine.finished
    })


    //return a card component loaded with the correct data 
    return (

        <div className={bem()}>
            <div ref={container} className={bem("container" , '--about')}>

                <div className={bem('about','--abouttitleandtextbox')}>
                    <h4 className={bem('about', "--title")}>{aboutData.title}</h4>
                    <p className={bem('about' , "--text")}>{aboutData.data}</p>
                </div>
                <div className={bem('about','--highlightandimg')}>
                    <h4 className={bem('about','--highlight')}>{aboutData.highlight}</h4>
                    <img className={bem('about','--img')} src={aboutData.img} />
                </div>

            </div>
        </div>
    )
}


export default AboutPage;