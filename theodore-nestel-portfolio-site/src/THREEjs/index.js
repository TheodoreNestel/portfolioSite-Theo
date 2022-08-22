import * as THREE from 'three';
import {useEffect , useState} from "react"
import Model from './Model';
// Store Model Instance in Module Scope


export const useTHREE = (ref) => {
  const [model , setModel] = useState()
  
  useEffect(() => {
    if(!ref.current) return
    // Initialize New Model or Update Existing Model
    if (!model) setModel(new Model(ref.current).init())
    else model.update(ref.current)

    // Just stop the tick in case
    return () => model?.stopTick()

  }, [ref.current , model])
  return model
}

// export function useTransition(planet){

//   useEffect(() => {

//     if (!model || !planet) return

//     // Just an example of how we can call a method from our model
//     model.changePlanet(planet)
    

//   }, [planet]) 

// }

