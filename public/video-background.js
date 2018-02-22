document.addEventListener('DOMContentLoaded',()=>{
    
     //activateCameraBackground(true)
    
})



// this starts the video background if 'active' argument is true
function activateCameraBackground(activate){
  
    if (activate){
      
        const videoOptions = {  
               video: { facingMode: { exact: "environment" } }
        }

        
        navigator.mediaDevices.getUserMedia(videoOptions)
          .then(function(stream){

                const vid = document.getElementById('camera-stream')
                vid.src = window.URL.createObjectURL(stream)

          })
          .catch(er=>{
          
            alert('camera stream error')
            
            // set background image when camera feed isn't available
            document.querySelector('a-sky').setAttribute('src', 'https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
        })
      
      
      
    } else {
      
        const vid = document.getElementById('camera-stream')
        vid.src = ""
        
        document.querySelector('a-sky').setAttribute('src', 'https://cdn.glitch.com/75a4acdf-fba3-4264-8ea8-b58e00438448%2Fsky.jpeg?1519054480736')
    }
  
}