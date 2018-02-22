/*
document.querySelector('#shoot')
 .addEventListener('onclick',(ev)=>{
  
  //alert('shooting')
  // create cube
  // give it animation
      //
    document.querySelector('#laser1').play()
  
    const scene = document.querySelector('a-scene')
    const cube = document.createElement('a-sphere')
    
    cube.setAttribute('color','cyan')
    cube.setAttribute('position', '0 0 0')
    cube.setAttribute('radius', '0.20')
  
    // read player rotation
    // let rot = document.querySelector('#player').getAttribute('rotation')
    // console.log('rot', rot)
  
    // let to
  
    // if (rot.y >=0 && rot.y<90) { } // x is minus, z is minus
    // else if (rot.y >=90  && rot.y<180){} // x minus, z plus
    // else if (rot.y >=180 && rot.y<270){} // x plus, z plus
    // else {}
  
  
    let anim = document.createElement('a-animation')
    anim.setAttribute('attribute', "position" )
    anim.setAttribute('dur', "2000")
    anim.setAttribute('from',"0 0 0")
    anim.setAttribute('to',"0 0 50")
    anim.setAttribute('repeat',"1")
    
    
  
  
  
    scene.appendChild(cube)
    cube.appendChild(anim)
})
*/