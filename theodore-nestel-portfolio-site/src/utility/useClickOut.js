import {useEffect} from "react" 



export default function useClickOut(selector , callback , dependencies){


    useEffect(()=>{
        const handleClick = (e)=>{
           const isMatchedElement = e.target.closest(selector) //grab the element that matches our selector 
            
           !isMatchedElement&& callback&& callback() //checks that callback is a thing and not null and that isTarget isnt true then run the call back if both conditions pass 
          

        }
        document.addEventListener("click" , handleClick) // add event listener with function above to the doc
        return ()=> document.removeEventListener("click", handleClick)
    },dependencies)
}



//**Arjun needed to clear this one up a bit brain hurt  */