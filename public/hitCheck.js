AFRAME.registerComponent('hit-check', {
    schema: {
      el: {
        type: 'selector'
      },
      activated:{
        default: false
      }
    },
    multiple: true,
    tick: function () {
      
      const cube = this.el
      const playerSphere = this.data.el
      let dist = cube.object3D.getWorldPosition().distanceTo(playerSphere.object3D.getWorldPosition())
      
      if (dist <= 5 && !this.data.activated) {
        
          //console.log(cube, 'not active', this.data.activated)
          this.data.activated = true
      }
      
      if (dist < 10 && dist > 5 && this.data.activated===true) {
        
          const parent = cube.parentElement
          parent.parentElement.removeChild(parent)  // remove one Enemy

          // update score on screen
          enemiesKilled ++
          // console.log('enemiesKilled', enemiesKilled, 'generated', enemiesGenerated) 
          document.querySelector('#enemiesKilled').innerHTML = enemiesKilled
        
          updatePlayerLife(-1, checkEnemiesKilled)
        
          document.querySelector('#chewing2').components.sound.stopSound()  
          document.querySelector('#chewing2').components.sound.playSound()  

      }
    }
})