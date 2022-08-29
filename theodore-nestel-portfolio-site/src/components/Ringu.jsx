
import anime from "animejs"
import React , {useRef , useLayoutEffect} from "react"
import { useExit } from "../utility/useAnimation"


 //ring animation code 
//  const ringAnim = () => {
    
//       anime.timeline({
//         targets : ring,
//         easing: "easeInOutQuad",
//         duration: 1900,
       
      
//       }).add({
//         scale : 6,
//       }).add({
//         scale : 1
//       }).add({
//         //this line of code is mega haunted **Arjun
//         //the anime js overrides the default css anim on the ring I dont know how to bring it back
//         //this is a hotfix but its mega mega haunted help will be needed 
//         rotate : 360,
//         easing :'linear',
//         duration : 100000,
//         loop : true,
        
//         changeComplete: anim => setTimeout(() => anim.restart())
//       })
  
  
//       console.log('This triggered',ring)
//     }


export default function Ringu ({currentPage}){
    const ring = useRef()
    const ringuAnim = useRef()
    useLayoutEffect(()=>{ //run this on mount for ringu spin 
    
    // ringuAnim.current =  anime({
    //     targets : [ring.current],
    //     rotate : [0 , 360],
    //     duration : 200000,
    //     loop : true,
    //     easing : "linear"
    //   })

    anime({
        targets : [ring.current],
        duration: 1900,
        scale : [6,1],
        easing : 'easeInOutQuad'
    })

      //return ()=> ringuAnim.current.pause()

    },[currentPage])

    useExit('ringu',async ()=>{
        const scaleRingu = anime({
            targets : [ring.current],
            duration: 1900,
            scale : 6,
            easing : 'easeInOutQuad'
        })
        await scaleRingu.finished
        //ringuAnim.current.pause()
    },[currentPage])

    return (
        <div ref={ring} className="ringu">
            <img src="/ring2Formated.png"/>
        </div>
    )
}

