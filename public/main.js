'use strict'
let globalStream

let   gameLevel = 1
let   playerLife = 100        // units: percent
let   enemiesLimit
let   enemiesGenerated =  0
let   enemiesKilled =  0
//let   enemies = []            // not used



document.addEventListener('DOMContentLoaded',()=>{
  
    //setSkyPhoto('https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
  
    setTimeout(startNewGame, 2000)
  
    /*if (gameLevel === 1 && isMobileDevice() === true ) {
      
      activateCameraBackground(true)
      setTimeout(()=>{  activateCameraBackground(false)  },9000)
      
    }*/
    //else setSkyPhoto('https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
      
})


function startNewGame(){
  
    switch(gameLevel) {
        
        case 1: setSkyPhoto('https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
        
                if ( confirm("Alien zombies are coming to eat us!!! \n\n Defend the planet, pew them all!")===true){
                  
                      activateCameraBackground(false)  // turn off video in case player starts over from 3rd level
                      setLevelVars()
                      playerLife = 100
                      break;
                }

        case 2: //setSkyPhoto('https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fgeorgia2DownscaledToWidth7000.jpg?1520539626991')
                setSkyPhoto('https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fgeorgia2DownscaledToWidth5000.jpg?1520545341906')
                setLevelVars(30)
                break;

        case 3: activateCameraBackground(true)
        
                // remove sky to see camera background
                let sky = document.querySelectorAll('a-sky')
                sky[0].parentNode.removeChild(sky[0])
        
                setLevelVars(40)
                break;
    }
  
    
      
  function setLevelVars(limit=12){
    
      enemiesLimit = limit
      enemiesGenerated =  0
      enemiesKilled    =  0
      //enemies = []

      for (let i=0; i < 8; i++) addNewEnemy()
    
      //alert('en limit ' + enemiesLimit)
  }
}



function addNewEnemy(){
      //enemies.push(new Enemy(gameLevel))
      const en = new Enemy(gameLevel)
}

function updatePlayerLife(toAdd, callback){
  
      playerLife += toAdd*20
  
      if (playerLife <= 0) {
        
          if (confirm('They pewed you!\n\n*  Game Over :(  *\n\n  Maybe one more... turn...?') === true ){
            
                  removeAllEnemies()
                  gameLevel = 1
                  startNewGame()
            
          } else removeAllEnemies()
        
      } else {
        
        const life = document.querySelector('#lifeIndicator')
        life.style.width = `${playerLife}vw`
        
        if (playerLife <=60 && playerLife > 40) life.style.backgroundColor = 'rgba(255, 255, 0, .8)'
        else if (playerLife <=20) life.style.backgroundColor = 'rgba(255, 0, 0, .8)'
        
        return callback()
      }
}


function checkEnemiesKilled(){
        
        const enemiesOnScene = document.querySelectorAll('a-entity.enemy')
        console.log('enemies ' + enemiesOnScene.length)  
        
        if (enemiesKilled + enemiesOnScene.length < enemiesLimit) {
          
            addNewEnemy()
            //alert('new en ' + enemiesKilled + ' of ' + enemiesLimit)
                                                                     
        } else if (//enemiesKilled === enemiesLimit && 
                 enemiesOnScene.length === 0) {
                //document.querySelector('#gameover1').play()  // idk if we need this, i dont get any sounds on iPhone still
              
                document.querySelector("#gameover1").components.sound.playSound() // game over sound play
              
              
                setTimeout(()=>{
                    // this has to be changed to go to next level
                  
                    if (confirm('~ You saved planet Earth! ~\n\n\n? New level ?')===true) {
                      
                      //removeAllEnemies()
                      gameLevel ++
                      if (gameLevel>3) gameLevel = 1
                      
                      return startNewGame()
                      
                      
                    } //else removeAllEnemies()
                  
                },1000)
        }
}

function removeAllEnemies(){
      
      const enemiesOnScene = document.querySelectorAll('a-entity.enemy')
      console.log('enemieson scene', enemiesOnScene.length, enemiesOnScene[0])
      
      const parentEl = enemiesOnScene[0].parentNode
      console.log('parent',parentEl, enemiesOnScene[0])
  
      enemiesOnScene.forEach(enemy => enemy.parentEl.removeChild(enemy) ) 
      
}

function setSkyPhoto(src){
  
      const scene = document.querySelector("a-scene")
      let sky  = document.querySelector('a-sky')
      
      if (!sky){ 
          sky = document.createElement('a-sky')
          scene.appendChild(sky)
      }
      //console.log('sky', sky)
    
      document.querySelector('a-sky').setAttribute('src', src)    
}