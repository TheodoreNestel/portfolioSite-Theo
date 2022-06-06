import {useEffect} from "react" 

export default function useClickOut(selector , callback){


    useEffect(()=>{
        const handleClick = (e)=>{
           const isMatchedElement = e.target.closest(selector)
            
           !isMatchedElement && callback && callback() //checks that callback is a thing and not null and that isTarget isnt true
          

        }
        document.addEventListener("click" , handleClick)
        return ()=> document.removeEventListener("click", handleClick)
    },[selector])
}