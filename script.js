const audio = document.getElementById("bgAudio ");                                                                                            
   const toggle = document.getElementById("audioTo ggle");                                                                                       
   const volume = document.getElementById("audioVo lume");                                                                                       
                                                                                                                                                 
   const savedVolume = localStorage.getItem("bgAudioVol ume");                                                                                   
   if (savedVolume !== null) {                                                                                                                   
   volume.value = savedVolume;                                                                                                                   
   }                                                                                                                                             
   audio.volume = Number(volume.value);                                                                                                          
                                                                                                                                                 
   const savedPlaying = localStorage.getItem("bgAudioPla ying");                                                                                 
   if (savedPlaying === "true") {                                                                                                                
   toggle.textContent = "⏸ Pause Audio";                                                                                                         
   } else {                                                                                                                                      
   toggle.textContent = "▶ Play Audio";                                                                                                          
   }                                                                                                                                             
                                                                                                                                                 
   toggle.addEventListener("click", async () => {                                                                                                
   if (audio.paused) {                                                                                                                           
   try {                                                                                                                                         
   await audio.play();                                                                                                                           
   toggle.textContent = "⏸ Pause Audio";                                                                                                         
   localStorage.setItem("bgAudioPla ying", "true");                                                                                              
   } catch (err) {                                                                                                                               
   console.warn("Playback blocked until user gesture:", err);                                                                                    
   }                                                                                                                                             
   } else {                                                                                                                                      
   audio.pause();                                                                                                                                
   toggle.textContent = "▶ Play Audio";                                                                                                          
   localStorage.setItem("bgAudioPla ying", "false");                                                                                             
   }                                                                                                                                             
   });                                                                                                                                           
                                                                                                                                                 
   volume.addEventListener("input", () => {                                                                                                      
   audio.volume = Number(volume.value);                                                                                                          
   localStorage.setItem("bgAudioVol ume", volume.value);                                                                                         
   });                                                                                                                                           
 ```                                            