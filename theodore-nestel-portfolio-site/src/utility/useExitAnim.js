import { useEffect } from "react";

// Storing Object in Module Scope
const animationLibrary = {}

// Hook takes key for animation, animation function, and dependency array
function useExitAnim(key, animation, dependencies = []) {

    useEffect(()=>{

        if (key) animationLibrary[key] = animation

    } , dependencies)

    return animationLibrary

}


export default useExitAnim;