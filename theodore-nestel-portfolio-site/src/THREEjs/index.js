import { useEffect , useState } from "react"
import Model from "./Model"

export const useTHREE = (ref) => {

  //useSate to keep track of our model 
  const [model , setModel] = useState()
  
  //the logic that instanciated our Model class and makes sure that if it changes in anyway 
  //everything is updated accordingly to avoid the app breaking 
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