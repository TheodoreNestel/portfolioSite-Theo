import React , { useRef } from "react";
import { useAnimation} from "../utility/useAnimation";
import { useTHREE } from "../THREEjs";


const Space = () => {

  const canvas = useRef() //we store where the canvas is inside a ref to avoid re-render issues 

  const model = useTHREE(canvas) //create an Instance of our Model class which has all the THREEjs logic 

  const animations = useAnimation() //once again storing animation logic in here using closures

  animations.space = (planet)=> model?.changePlanet(planet) //if model exists store the space animations
  //function inside it so we can call it using animations[space]('name of planet')
  //this will then trigger the animeJs code inside model
  

  //return a canvas element
  return (
    <div className="space">
      {/* <Image image="/space.jpeg" /> */}
      <canvas className="canvas" ref={canvas}/>
    </div>
    
  )

}


export default Space;
