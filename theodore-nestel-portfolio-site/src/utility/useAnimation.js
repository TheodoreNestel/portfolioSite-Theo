import { useEffect, useLayoutEffect } from "react";

// Storing Object in Module Scope
const animationLibrary = {}//use to store animation logic here and not lose it when component unmounts 

// Hook takes key for animation, animation function, and dependency array
export function useExit(key, animation, dependencies = []) {

    useEffect(()=>{

        if (key) animationLibrary[key] = animation //if we are passed a key store the animation logic at that key

    } , dependencies)//this is a useEffect so run that whenever the passed dependencies change 

}

// 
export function useEnter(animation, dependencies = []) {

    useLayoutEffect(animation, dependencies)

}// same as above run this animation code when the dependency changes 

export function useAnimation() {
    return animationLibrary
}//return all stored animations in an object for easy access at any time 
