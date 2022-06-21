import { useEffect } from "react";

const animationLibrary = {}

function useExitAnim(key , animation , dependencies=[]){

    useEffect(()=>{

        if(key){

            animationLibrary[key] = animation;
        }

    } , dependencies)

    return animationLibrary

}


export default useExitAnim;