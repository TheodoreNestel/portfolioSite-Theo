import React , { useRef } from "react";
import { useAnimation} from "../utility/useAnimation";
import { useTHREE } from "../THREEjs";





const Space = () => {

  const canvas = useRef() //we store where the canvas is on a ref to avoid re-render issues 




  const model = useTHREE(canvas) 

  

  const animations = useAnimation()
  animations.space = (planet)=> model?.changePlanet(planet)
  

  return (
    <div className="space">
      {/* <Image image="/space.jpeg" /> */}
      <canvas className="canvas" ref={canvas}/>
    </div>
    
  )

}


export default Space;


//<Image image="/space.jpeg" />


{/* <video      height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay>
                    
        <source src="/movingscuffed.mp4" type="video/mp4" /> */}