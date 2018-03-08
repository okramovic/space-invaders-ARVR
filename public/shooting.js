AFRAME.registerComponent('cursor-listener', {
    //dependencies: ['raycaster'],  // this slows down rendering and isnt needed actually
    init: function () {
        const el = this.el;
        el.addEventListener('mouseenter', function (evt) {
        // el.addEventListener('click', function (evt) {
          
            // turn gun to blue to indicate shooting
            const gun = document.querySelector('#gun')
            const guntip = document.querySelector('#guntip')
            guntip.setAttribute("material", "color: #4CC3D9; opacity: 0.9")
            gun.setAttribute("material", "color: #4CC3D9; opacity: 0.7")
            
            // show laser to indicate shooting
            const ray = document.querySelector('#myray')
            ray.setAttribute("raycaster","objects: .collidable; showLine: true; far: 200")
          
            // hide laser and 'deactivate' gun
            setTimeout(()=>{
                ray.setAttribute("raycaster","objects: .collidable; showLine: false; far: 200")
                gun.setAttribute("material", "color: gray; opacity: 0.2")
                guntip.setAttribute("material", "color: gray; opacity: 0.4")
            }, 300)
          
          
            // stop the sound to be sure it can be played (if two shots after one another would happen)
            document.querySelector("#laser01").components.sound.stopSound()  
            
            // play gun sound
            document.querySelector("#laser01").components.sound.playSound() 
          
            
            el.parentNode.removeChild(el)  // remove enemy
          
          
            // update score on screen
            enemiesKilled ++
            // console.log('enemiesKilled', enemiesKilled, 'generated', enemiesGenerated) 
            document.querySelector('#enemiesKilled').innerHTML = enemiesKilled
            // document.querySelector('#enemiesGenerated').innerHTML = enemiesGenerated - enemiesKilled
            
            // see if level should end or new enemy get created
            checkEnemiesKilled()
        })
    }
})