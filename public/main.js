let   level = 1
let   playerLife = 100
const enemiesLimit     = 20
let   enemiesGenerated =  0
let   enemiesKilled    =  0
let   enemies = []


function startNewGame(){
  
    level = 1
    playerLife = 100
    enemiesGenerated =  0
    enemiesKilled    =  0
    enemies = []
  
    for (let i=0; i < 10; i++) addNewEnemy()
      
}



function addNewEnemy(){
  
      let en = new Enemy()
      /*en.addEventListener('enemyHitPlayer',(ev)=>{
          console.log('ENEMY HIT PLAYER')
      })*/
  
      enemies.push(en)
      //enemiesGenerated ++
}



function updatePlayerLife(toAdd){
  
      playerLife += toAdd*20
      console.log('playerLife',playerLife)
  
      if (playerLife <= 0) {
          if (confirm('they pewed you\n\n*  game over :(  *\n\n  new game?')===true){
            
                  startNewGame()
          }
        
      } else {
        
        const life = document.querySelector('#lifeIndicator')
        life.style.width = `${playerLife}vw`
        
        if (playerLife <=60 && playerLife > 40) life.style.backgroundColor = 'rgba(255, 255, 0, .8)'
        else if (playerLife <=20) life.style.backgroundColor = 'rgba(255, 0, 0, .8)'
      }
}


function checkEnemiesKilled(){
        
        const enemiesOnScene = document.querySelectorAll('a-entity.enemy')    
        //alert('enemies ' + enemiesOnScene.length)    
        
        if (enemies.length < enemiesLimit /*&& enemies.length > 0*/) addNewEnemy()
              
        else if (enemies.length >= enemiesLimit && enemiesOnScene.length == 0) {
                //document.querySelector('#gameover1').play()  // idk if we need this, i dont get any sounds on iPhone still
              
                document.querySelector("#gameover1").components.sound.playSound() // game over sound play
              
              
                setTimeout(()=>{
                    if (confirm('~ you saved the Earth ~\n\n\n? new game ?')===true) return startNewGame()
                },1000)
                
        }
}



document.addEventListener('DOMContentLoaded',()=>{

    setTimeout(startNewGame, 2000)
  
    if (level === 1) document.querySelector('a-sky').setAttribute('src','https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
  
})