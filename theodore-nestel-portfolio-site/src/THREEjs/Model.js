import * as THREE from 'three';

export default class Model {

  constructor(canvas) {

    this.canvas = canvas
    this.tickID = undefined
    this.sizes = {}


  }

  // This is the actual tick function
  tick = () => {


    // Call the tick function again
    this.startTick()

  }

  // Helper function so that we can start ticks
  startTick() {
    this.tickID = window.requestAnimationFrame(this.tick)
  }


  init() {

    // This is where you put the logic to get started with threejs

    // Set Canvas Size
    this.setCanvasSize()

    // Add Event Listener to handle sreen resize
    window.addEventListener("resize", () => this.setCanvasSize())

    // Finally Start running the ticker
    this.startTick()

    // Return class instance for chaining
    return this

  }

  setCanvasSize = () => {
    this.sizes = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    this.sizes.ratio = this.sizes.height / this.sizes.width
  }

  // Update Canvas Element Function
  update(canvas) {

    // Stop The tick
    this.stopTick()

    // Updatate Canvas Reference
    this.canvas = canvas

    // Update the renderer here

    // Start The tick again
    this.startTick()

  }

  // Function To Start the tick
  stopTick() {

    // Cancel Animation Frame If Running
    if (this.tickID) window.cancelAnimationFrame(this.tickID)

    // Reset Tick ID variable
    this.tickID = undefined

  }

  // Future change planet logic
  changePlanet(planet) {

    console.log(`Change to planet ${planet}`)

  }

}