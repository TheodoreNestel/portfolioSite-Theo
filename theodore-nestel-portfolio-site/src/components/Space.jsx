import React from "react";
import Image from "./Image"

const Space = () => {

  return (
    <div className="space">
      <video      height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay>
                    
        <source src="/movingscuffed.mp4" type="video/mp4" />
      </video>
    </div>
    
  )

}


export default Space;


//<Image image="/space.jpeg" />