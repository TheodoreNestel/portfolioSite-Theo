import React , {useRef , useEffect} from "react";
import Image from "./Image"
import { useAnimation} from "../utility/useAnimation";
import { useTHREETicker } from "../THREEjs";



const Space = () => {

  const canvas = useRef() //we store where the canvas is on a ref to avoid re-render issues 


  //tldr of this we use useEnter/useExit to pass data based on mount or unmount 
  const {space:target} = useAnimation()



  useTHREETicker(canvas) //this will handle the mount and unmount of canvas 

  


  //this will run when target changes so when we change planets in theory
  useEffect(()=>{
    
  },[target])



  //the above garbage lets us run functions based on the pages we are in using useEnter 
  //we need to export functions from THREE which will handle the change of planets 


  

  

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