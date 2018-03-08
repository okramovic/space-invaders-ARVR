
// Starts the video background if 'activate' argument is true

function activateCameraBackground(activate){
  
    // turns off video recording (to save battery)
    if (!activate && globalStream) 
          return globalStream.getTracks().forEach(track => track.stop())
  
    // to not start recording
    else if (!activate) return null
      
    
    // to start recording
    const videoOptions = { 
              video: { facingMode: { exact: "environment" } } 
    }
      
    navigator.mediaDevices.getUserMedia(videoOptions)
      .then( stream =>{
            
              globalStream = stream
              
              const vid = document.getElementById('camera-stream')
              vid.src = window.URL.createObjectURL(stream)
      
      
      }).catch(er=>{
            console.error('cam er',er)
            //alert('camera stream error')
            
            // set background image when camera feed isn't available
            document.querySelector('a-sky').setAttribute('src', 'https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
      })
      
    // is this necesary? I don't fully understand the .then and the .catch stuff above, so I'm not sure.
    // m: i changed the function so i removed that part
}