import * as THREE from 'three';
import anime from 'animejs'




/* 3d Scene Explanation 
  our entire scene will be 15 units long and 15 units wide making a 9x9 box 
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x @ x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x @ x x x x @ x x x x @ x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x @ x x x x x x x]
[x x x x x x x x x x x x x x x]
[x x x x x x x x x x x x x x x]


  each character above in 1 unit of space 
  the Xs represent the space around the planet that will be visible 
  the @ represent the planets themselves
  


*/

const textureLoader = new THREE.TextureLoader()

class Planet {

  constructor({ x, y, z, texture, bumpMap, bumpScale, geometry, generateMipmaps = false }) {

    // Create Texture
    const planetTexure = textureLoader.load(texture)
    planetTexure.generateMipmaps = generateMipmaps
    planetTexure.minFilter = THREE.NearestFilter

    //we create our planet1 material
    const materialParams = { map: planetTexure }
    if (bumpMap) materialParams.bumpMap = textureLoader.load(bumpMap)
    const material = new THREE.MeshStandardMaterial(materialParams)
    if (bumpScale) material.bumpScale = bumpScale

    // Create Mesh
    this.mesh =  new THREE.Mesh(geometry, material)

    // Update Mesh Position
    Object.assign(this.mesh.position, { x, y ,z })

  }

}


export default class Model {

  constructor(canvas) {

    //Three Js logic related vars 
    this.canvas = canvas
    this.tickID = undefined
    this.sizes = {}
    this.renderer = undefined
    this.camera = undefined
    //Three Js Objects 
    this.planet1 = undefined
    this.planet2 = undefined
    this.planet3 = undefined
    this.planet4 = undefined
    //Three Js Particles
    this.particles = undefined
    this.shineParticles = undefined
    this.particleGeo = undefined
    this.shineParticleGeo = undefined
    this.shineParticleMaterial = undefined
    this.colorArr =  new Float32Array()
    this.count = undefined
    this.shineCount = undefined
    this.shineParticleValues = {}
    //lights
    this.light = undefined
    //Misc vars
    this.frameCount = undefined
    this.time = undefined

    //Position and variable data object 
    this.dasPositionsJa = {}


    


  }


  init() {
    // Set Sizes based on the user's viewport 
    this.setSizes()

    //we Set the current time so we can force uniforms animations in tick()
    this.time = Date.now()

    //Setting the default positions on Three's Scene Geometries / Camera  
    this.dasPositionsJa = {
      planet1 : {
        x : 0,
        y : 0, 
        z : 0
      },
      planet2 : {
        x : 15,
        y : 0, 
        z : 0
      },
      planet3 : {
        x : 0,
        y : 15, 
        z : 0
      },
      planet4 : {
        x : -15,
        y : 0, 
        z : 0
      },
      camera : {
        x : 0 , 
        y : 0 , 
        z : 3,
        fov : 55
      }

    } //fov 55

    //init our shineParticles data 

    this.shineParticleValues = {
      size : 9,
      sizeAttenuation : true
    }

    //Create the scene 
    this.scene = new THREE.Scene()


    //OBJECTS 

    //Planet default Geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32) //we create our sphere geometry we will reuse this 


    const { planet1, planet2, planet3, planet4 } = this.dasPositionsJa

    this.planet1 = new Planet({
      texture: "2k_haumea_fictional.jpeg",
      geometry,
      ...planet1
    }).mesh

    this.planet2 = new Planet({
      texture: "MarsColorMap.jpg",
      bumpMap: "MarsBumpMap.png",
      bumpScale: 0.09,
      geometry,
      ...planet2
    }).mesh

    this.planet3 = new Planet({
      texture: "venusmap.jpg",
      bumpMap: "venusbump.jpg",
      bumpScale: 0.04,
      geometry,
      ...planet3
    }).mesh

    this.planet4 = new Planet({
      texture: "aboutplanetcolor.jpeg",
      bumpMap: "aboutplanetbump.jpeg",
      bumpScale: 0.04,
      geometry,
      ...planet4
    }).mesh

    // Add Planets to scene
    this.scene.add(this.planet1)
    this.scene.add(this.planet2)
    this.scene.add(this.planet3)
    this.scene.add(this.planet4)



    //LIGHTS //IDEA cool camera / light work 
    //the light could change positions during animation to add cool effects 
    this.light = new THREE.PointLight(0xffffff , 1.0)
    this.light.position.set(0 , 0 , 0)//xyz
    this.light.decay = 2
    this.light.distance = 100
    
    
    
    this.scene.add(this.light)
    

    //particles     


     //add an additional 500 stars 
    //the white start will go from visible to not 


    const particleMat = new THREE.PointsMaterial({
      size: 0.4,
      sizeAttenuation: true
    })


    //load particle texture & apply it 
    const particleTexture = textureLoader.load("star_04.png")
    particleMat.map = particleTexture
    particleMat.transparent = true 
    particleMat.alphaMap = particleTexture

    //SPECIAL PARTICLE 
    this.shineParticleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      sizeAttenuation: true
      })

    this.shineParticleMaterial.color = new THREE.Color('white')


    
    //Star colors randomly selected for each star 
    //Colors code was changed from 0-255 to 0.0-1.0 to fit in a float32 array 
    const spaceColorOptions = [
      [1.00000,0.82353,0.49020] , 
      [1.00000,0.63922,0.44314] , 
      [0.65098,0.65882,1.00000] ,
      [1.00000,0.98039,0.52549] ,
      [0.65882,0.48235,1.00000]
    ]
    //Selects a random index and return's the value inside 
    function getRandomItem(arr) {

      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      // get random item
      const item = arr[randomIndex];
  
      return item;
  }
    
    //Particle geometry is using a custom geometry we create it here 
    this.particleGeo = new THREE.BufferGeometry() //we create our own geo for the particles 
    this.count = 8000//this will be the amount of particles 

    //SPECIAL PARTICLES 
    this.shineParticleGeo = new THREE.BufferGeometry()
    this.shineCount = 1000 //these starts will shine
    const shinePositions = new Float32Array(this.shineCount * 3)//same as below they need xyz


    //BufferGeometry need to be passed a Float32 array containing the xyz values on each vertex
    const positions = new Float32Array(this.count*3) //each particle needs an xyz coord so we get 3 * the amount of particles 
    //same as above but to store rgb values for each vertex
    const colors = new Float32Array(this.count*3)


    //variable to get a new set of three colors from our space Color array
    let randomlySelectedRGB 

    //we loop to assign each vertex their xyz and color properties
    for(let i = 0; i < this.count *3; i++){

      //this lets us interact with each sets of three vertex
      let i3 = i * 3

      //the -0.5 gets us a random value between 0.5 and -0.5 which centers the randomness around 0 the middle
      //then me * by a value to get random values much further out ** KEEP THEM BEHIND 
      positions[i3] = (Math.random()-0.5) * 60 //x 
      positions[i3 + 1] = (Math.random()-0.5) * 60 //y 
       positions[i3 + 2] = (Math.random()-0.5) * 60//z -60 on the z to keep the particles behind our planets 

      //we get a random array of rgb values from our array of space colors  
      randomlySelectedRGB = getRandomItem(spaceColorOptions)

      //we then set the three values in our randomly selected color on each set of three vertex 
      colors[i3] = randomlySelectedRGB[0]
      colors[i3 + 1] = randomlySelectedRGB[1]
      colors[i3 + 2] = randomlySelectedRGB[2]
    }

    //loop for our shinning stars 
    for(let i = 0; i < this.shineCount * 3; i++){
      let i3 = i * 3

      shinePositions[i3 + 0] = (Math.random()-0.5) * 60//x 
      shinePositions[i3 + 1] = (Math.random()-0.5) * 60//y 
      shinePositions[i3 + 2] = (Math.random()-0.5) * 60//z
    }

    //set the positions of our shining stars on the bufferGeo
    this.shineParticleGeo.setAttribute('position' , new THREE.BufferAttribute(shinePositions , 3))


    
    //we set those new positions on our geometry 
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions , 3))
    //we set the color on our particle
    this.particleGeo.setAttribute('color' , new THREE.BufferAttribute(colors , 3))
    //we activate the vertex colors 
    particleMat.vertexColors = true


  
    
    
    
    //we make our points mesh which are our particles
    this.particles = new THREE.Points(this.particleGeo, particleMat) 

    //we create a second points mesh for our shining stars 
    //this.shineParticles = new THREE.Points(this.shineParticleGeo , this.shineParticleMaterial)

    this.scene.add(this.particles)
    //this.scene.add(this.shineParticles)



    
    //Create a Perspective Camera
    this.camera = new THREE.PerspectiveCamera(this.dasPositionsJa.camera.fov , this.sizes.aspectRatio , 1 , 1000)
    //param are fov , aspect ratio , near & far frustum 

    //We set our Camera's position based on our position's object instanciated earlier
    this.camera.position.z = this.dasPositionsJa.camera.z //we set the camera position 3 units towards the screen 
    this.camera.position.x = this.dasPositionsJa.camera.x
    this.camera.position.y = this.dasPositionsJa.camera.y

    this.camera.focus = 1.4;

    //the Camera is then added to the scene
    this.scene.add(this.camera)



    //RENDERER 

    //We create our Renderer and pass our canvas to it 
    this.renderer = new THREE.WebGLRenderer({
      canvas : this.canvas
    })//this takes an object as a param 

    //we set our Renderer's size based on our sizes object 
    this.renderer.setSize(this.sizes.width, this.sizes.height)//we set the renderer's size 

    //here we will set the pixel ratio of the rendered to match the one on the user's device 
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))



    //Add Event Listener to handle sreen resize
    window.addEventListener("resize", () => {
      this.setSizes()
      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.camera.aspect = this.sizes.aspectRatio
    })


    
    console.log(this.shineParticleMaterial , particleMat)
    
    //Start running the ticker
    this.startTick()

    // Run Intro Animation
    this.launchPlanet()

    //Return class instance for chaining
    return this

  }


  //function will return an array with the first value in each set of 3 and the original colors 
  starShine = (array) => {
    let vertexValues = []
    
    for(let i = 0; i < this.count; i++){
      let i3 =  i * 3
      vertexValues.push({
        start : i3,
        R : array.color.array[i3],
        G : array.color.array[i3 + 1],
        B : array.color.array[i3 + 2],
        shining : false
      })
    }
    return vertexValues
  }

  
  



  //Our tick function - this block runs on everyframe
  tick = () => {
    

    //this.shineParticleMaterial.size += 0.01 
    //this.shineParticleMaterial.needsUpdate = true
    //this.shineParticles.needsUpdate = true
    //console.log(this.shineParticleMaterial.size)
    //this.shineParticleGeo.needsUpdate = true
    
    


    //Delta time calculation for animation uniforming  
    let currentTime = Date.now()
    let deltaTime = currentTime - this.time
    this.time = currentTime
    

    //PLANET ROTATIONS 
    this.planet1.rotation.y += 0.0001 * deltaTime
    this.planet2.rotation.x += 0.0001 * deltaTime
    this.planet3.rotation.x -= 0.0001 * deltaTime
    this.planet4.rotation.z -= 0.0001 * deltaTime
    this.planet4.rotation.y -= 0.0001 * deltaTime
    
    //CAMERA MOVEMENT we update our camera
    this.camera.updateProjectionMatrix();

      //Particle animation ? 
     //TEMPORARILY SHELVED AS animating particles is incredibly taxing 
     //shaders might be needed for this part 

      

     //we render our renderer everyTick 
    this.renderer.render(this.scene, this.camera)

    
    //this sets off the tick function which runs every tick - part of the instanciation 
    this.startTick()

  }

  // Helper function so that we can start ticks
  startTick() {
    this.tickID = window.requestAnimationFrame(this.tick)
  }


 

  setSizes = () => {
    this.sizes = {
      height: window.innerHeight,
      width: window.innerWidth,
      aspectRatio : window.innerWidth / window.innerHeight 
    }

    
    //this.renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))
  }

  //Update Canvas Element Function | This function runs if our canvas element was to change to prevent errors
  update(canvas) {

    //Stop The tick
    this.stopTick()

    //Updatate Canvas Reference
    this.canvas = canvas


    //Start The tick again
    this.startTick()

  }

  //Function To Start the tick
  stopTick() {

    // Cancel Animation Frame If Running
    if (this.tickID) window.cancelAnimationFrame(this.tickID)

    // Reset Tick ID variable
    this.tickID = undefined

  }

  //Camera animation launcher - this will take in parameters from the react app and apply an animation based on 
  //the values received.
  changePlanet(planet, duration = 2000) {

    // Create timeline with defaults
    const timeline = anime.timeline({
      easing: "easeInOutCubic",
      duration
    })

    // Set some default values for the
    let positions = this.dasPositionsJa.planet1
    let lighting = { x: -4,  y: -3, z: 6 }

    // Get planet position
    switch (planet) {
      case "ProjectPage":
        positions = this.dasPositionsJa.planet2
        lighting = { x: 10,  y: 2, z: 4 }
        break

      case "AboutPage":
        positions = this.dasPositionsJa.planet3
        lighting = { x: 8,  y: -2, z: 4 }
        break

      case "ContactPage":
        positions = this.dasPositionsJa.planet4
        lighting = { x: -5,  y: 7, z: 1 }
        break
    }

    // Animate Planet Position
    timeline.add({
      targets: [this.camera.position],
      x: positions.x,
      y: positions.y,
      z: [3, 3.5, 3],
      easing: "easeInOutCirc"
    })

    // Animate Lighting Position
    timeline.add({
      targets: [this.light.position],
      ...lighting
    }, `-=${duration}`)

    // Animate Light Intensity
    timeline.add({
      targets: [this.light],
      intensity: [1, 0, 1],
      easing: "easeInOutCirc"
    }, `-=${duration}`)

    // Return Promise
    return timeline.finished

  }

  launchPlanet(duration = 2000) {


    // Create timeline with defaults
    const timeline = anime.timeline({
      easing: "easeOutQuad",
      duration
    })

    // Set some default values for the
    let positions = this.dasPositionsJa.planet1

    // Animate Planet Position
    timeline.add({
      targets: [this.camera.position],
      x: positions.x,
      y: positions.y,
      z: [10, 3]
    })

    // Animate Lighting Position
    timeline.add({
      targets: [this.light.position],
      x: -4,
      y: -3,
      z: 6,
    }, `-=${duration}`)

    // Animate Light Intensity
    timeline.add({
      targets: [this.light],
      intensity: [0, 1],
    }, `-=${duration / 3}`)

    // Return Promise
    return timeline.finished

  }

}