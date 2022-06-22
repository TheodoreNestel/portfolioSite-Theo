import { useEffect, useLayoutEffect } from "react";

// Storing Object in Module Scope
const animationLibrary = {}

// Hook takes key for animation, animation function, and dependency array
export function useExit(key, animation, dependencies = []) {

    useEffect(()=>{

        if (key) animationLibrary[key] = animation

    } , dependencies)

}

// 
export function useEnter(animation, dependencies = []) {

    useLayoutEffect(animation, dependencies)

}

export function useAnimation() {
    return animationLibrary
}
