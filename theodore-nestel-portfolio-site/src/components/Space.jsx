import React from "react";
import Image from "./Image"
import { useExit } from "../utility/useAnimation";

const Space = () => {

  useExit("space", () => {
    
  })

  return (
    <div className="space">
      <Image image="/space.jpeg" />
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