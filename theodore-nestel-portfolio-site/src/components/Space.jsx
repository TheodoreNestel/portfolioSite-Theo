import React , { useRef } from "react";
import { useAnimation} from "../utility/useAnimation";
import { useTHREE, useTransition } from "../THREEjs";



const Space = () => {

  const canvas = useRef() //we store where the canvas is on a ref to avoid re-render issues 


  //tldr of this we use useEnter/useExit to pass data based on mount or unmount 
  const { space: target } = useAnimation()



  useTHREE(canvas) //this will handle the mount and unmount of canvas 
  //this also instanciates our model class which contains all of our threeJs logic 



  // This will handle transitions
  useTransition(target) //we call this when we change pages to run an animation
  //This takes a string which will be then translated into the correct animation in 
  //the THREEJS index folder when is then passed down to our model class 

  //this may need to be in our menue ui 
  //the above garbage lets us run functions based on the pages we are in using useEnter 
  //we need to export functions from THREE which will handle the change of planets 


  //needs to be passed the key of the page we are on so the camera can move to the current page
  //because they are hooks it cannot be called inside jsx 


  

  

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