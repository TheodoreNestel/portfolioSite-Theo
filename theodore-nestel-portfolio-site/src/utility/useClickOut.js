import {useEffect} from "react" 

export default function useClickOut(selector , callback, deps) {

    useEffect(()=>{

        const handleClick = (e)=>{

            // if the clicked element is not the selector, and the clicked element is not a child of the selector
            const isMatchedElement = e.target.closest(selector)
            
            !isMatchedElement && callback && callback() //checks that callback is a thing and not null and that isTarget isnt true
          
        }

        document.addEventListener("click" , handleClick)

        return ()=> document.removeEventListener("click", handleClick)

    }, deps)
    
}