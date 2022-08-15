import * as THREE from 'three';
import {useEffect} from "react"

let tickId //we place the tick inside a variable so we can call cancelAnim on it || works the same 
let canvas //this will be given a ref from our space component


///THREE LOGIC GOES HERE vvvv//////////
//might need to place inside a function 

//test :/ 

function test(){ //function that will only run after canvas 
    //Create the scene 
const scene = new THREE.Scene()


//OBJECTS // The objects we will use will be in here 

//test Cube
const geometry = new THREE.BoxGeometry(1, 1, 1) //we create our box geometry 
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })//we create our red material 
const mesh = new THREE.Mesh(geometry, material)//we combine the two to make our cube mesh
scene.add(mesh)//we then add it to our scene 


//SIZES the size of our camera / scene 

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight
}
//we're going to create an event listener that will resize our canvas if the window is resized 
window.addEventListener('resize',()=>{
    //we reset our sizez to be the new window sizes 
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //we also resize our camera 
    camera.aspect = sizes.width / sizes.height

    //we can put our pixel ratio logic here in the edge case that someone uses two screen with 
    //different ratios ie: me :) that way if they drag it and place it somewhere else the app keeps up
    renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))

})


//CAMERA (subject to change)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
//param are fov , aspect ratio , near & far frustum 

camera.position.z = 3 //we set the camera position 3 units towards the screen 


scene.add(camera) //we add the camera to the scene 


//RENDERER 
//the piece de resistance the thing that makes everything visible 
const renderer = new THREE.WebGLRenderer({
    canvas
})//this takes an object as a param 

renderer.setSize(sizes.width, sizes.height)//we set the renderer's size 

//here we will set the pixel ratio of the rendered to match the one on the user's device 
renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))


const clock = new THREE.Clock()
}


//////////////////////////////////////

const tick = ()=>{ //this is where all the tick stuff goes 
    
    const elapsedTime = clock.getElapsedTime()

    renderer.render(scene, camera) //we render our renderer everyTick 

    tickId = window.requestAnimationFrame(tick)

}


//an all in one useEffect hook that is in charge of setting up our canvas and THREE code on mount 
export const useTHREETicker = (ref) => {
    useEffect(()=>{

    canvas = ref.current

    test()

    tickId = window.requestAnimationFrame(tick) //now runs everyframe 
    
    return () => window.cancelAnimationFrame(tickId)
    
    },[ref])
}   