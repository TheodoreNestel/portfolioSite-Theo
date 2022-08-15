import * as THREE from 'three';
import {useEffect} from "react"

let tickId //we place the tick inside a variable so we can call cancelAnim on it || works the same 
let canvas //this will be given a ref from our space component


///THREE LOGIC GOES HERE vvvv//////////
//might need to place inside a function 




//////////////////////////////////////

const tick = ()=>{ //this is where all the tick stuff goes 
    

   tickId = window.requestAnimationFrame(tick)

}









export const useTHREETicker = (ref) => {
    useEffect(()=>{

    canvas = ref.current
    tickId = window.requestAnimationFrame(tick) //now runs everyframe 
    
    return () => window.cancelAnimationFrame(tickId)
    
    },[ref])
}   