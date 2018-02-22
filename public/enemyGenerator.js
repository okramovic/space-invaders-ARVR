// can i remove this?
//     cube.addEventListener("onmouseover", function(){
//       cube.setAttribute("scale","9 9 9")
//     })
//     cube.appendChild(animationPosition)

                       
// Randomly generates enemies at different locations, moving and rotating towards the center of scene (player) with different speeds

// gameLevel parameter is for being able to set enemies according to level of game
function Enemy(gameLevel){
  
    // Formula logic: Math.floor(Math.random() * (max - min + 1)) + min;
  
    this.x = Math.floor(Math.random() * (800 - (-300) + 1)) + (-300)
    this.z = Math.floor(Math.random() * (800 - (-300) + 1)) + (-300)
    this.y = Math.floor(Math.random() * (50 - (-10) + 1)) + (-10)
  
    this.s = Math.floor(Math.random() * (30000 - 23000 + 1)) + 23000
    this.r = Math.floor(Math.random() * (5000 - 500 + 1)) + 500
  
  
    // Creates enemy-related html elements and places them in hyerarchies
  
    const scene = document.querySelector("a-scene")
    //const cube = document.createElement("a-box")
    const cube  = document.createElement("a-entity")
    //cube.setAttribute("geometry","primitive: box")
    //cube.setAttribute("material","color: #696969;")
    
    const animationPosition = document.createElement("a-animation")
    const animationRotation = document.createElement("a-animation")
  
    
    // adding plain invisible cube with 'real' material so imported 3D models can be shot at (otherwise cursor event never gets fired)
    const target = document.createElement("a-box")
    target.setAttribute("geometry","primitive: box")
    target.setAttribute("material","color: gray; opacity: 0.01")
    target.setAttribute("scale", "2 2 2")
    target.setAttribute('hit-check', 'el: #playerSphere')
    target.setAttribute('class', 'collidable')
    //collison-check="el: #otherduck;
    //target.setAttribute('cursor-listener', '')
    cube.appendChild(target)
  
  
    // Adds a cube to the <a-scene> tag, populates its attributes 
    
    cube.setAttribute("scale", "1.5 1.5 1.5")
    cube.setAttribute('rotation', '0 45 0')
    cube.setAttribute("class", "enemy")
    cube.setAttribute("src", "https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Ftexture.png?1518868659396")
    cube.setAttribute("obj-model", "obj: #invader1; mtl: #invader1-mtl") 
    cube.setAttribute('cursor-listener', '')
    cube.setAttribute('collider-check', '')
    //cube.setAttribute('class', 'enemy collidable')
    //cube.setAttribute('hit-check', '')
    
  
    
    
    // Adds the movement animation to the above cube, populates its attributes
  
    animationPosition.setAttribute("attribute", "position")
    animationPosition.setAttribute("from", `${this.x} ${this.y} ${this.z}`)
    animationPosition.setAttribute("to", "0 -5 0")
    animationPosition.setAttribute("dur", `${this.s}`)
    animationPosition.setAttribute("easing", "ease")
    // animationPosition.setAttribute("repeat", "indefinite")
    cube.appendChild(animationPosition)
    
  
  
    // Adds the rotation animation to the above cube, populates its attributes
    
    animationRotation.setAttribute("attribute", "rotation") 
    // animationRotation.setAttribute("begin", "mouseenter")
    animationRotation.setAttribute("from", "0 0 0")
    animationRotation.setAttribute("to", "0 360 0")
    animationRotation.setAttribute("direction", "alternate") 
    animationRotation.setAttribute("dur", `${this.r}`)
    animationRotation.setAttribute("easing", "linear")
    animationRotation.setAttribute("repeat", "indefinite")
    cube.appendChild(animationRotation)
    
  
    scene.appendChild(cube)
  
}