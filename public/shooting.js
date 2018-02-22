

// document.addEventListener('DOMContentLoaded',()=>{
  //console.log('DOM')
  /*setTimeout(()=>{
    //document.querySelector('#laser1').play()
    
  },3000)*/
  
  //console.log('sound', document.querySelector('#laser1') )
  
// })



AFRAME.registerComponent('cursor-listener', {
    //dependencies: ['raycaster'],
    init: function () {
        const el = this.el;
        //el.addEventListener('mouseenter', function (evt) {
        el.addEventListener('click', function (evt) {
          
            const gun = document.querySelector('#gun')
            const guntip = document.querySelector('#guntip')
            guntip.setAttribute("material", "color: #4CC3D9; opacity: 0.9")
            gun.setAttribute("material", "color: #4CC3D9; opacity: 0.7")
            
            // show laser to indicate shooting
            const ray = document.querySelector('#myray')
            ray.setAttribute("raycaster","objects: .collidable; showLine: true; far: 200")
          
            // hide laser after 1 sec
            setTimeout(()=>{
                ray.setAttribute("raycaster","objects: .collidable; showLine: false; far: 200")
                gun.setAttribute("material", "color: gray; opacity: 0.2")
                guntip.setAttribute("material", "color: gray; opacity: 0.4")
            } , 300)
          
          
            // stop the sound to be sure it can be played (if two shots after one another would happen)
            document.querySelector("#laser01").components.sound.stopSound()  
            
            // play 'pew' sound
            document.querySelector("#laser01").components.sound.playSound() 
          
          
            //el.setAttribute("src","https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fmagenta.png?1519154802197")
            
          
            el.parentNode.removeChild(el)  // remove enemy
          
          
            // update score on screen
            enemiesKilled ++
            console.log('enemiesKilled', enemiesKilled, 'generated', enemiesGenerated) 
            document.querySelector('#enemiesKilled').innerHTML = enemiesKilled
            // document.querySelector('#enemiesGenerated').innerHTML = enemiesGenerated - enemiesKilled
            
            checkEnemiesKilled()
        })
    }
})
  

