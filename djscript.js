
var x5 = document.getElementById("ab5");
                //var x4=$("#mute4").is(":checked");
                function getOffset(el) {
                    const rect = el.getBoundingClientRect();
                    return {
                        left: rect.left + window.scrollX,
                        top: rect.top + window.scrollY
                    };
                    console.log(top);
                } 
                var mute4v=function(){
                    if (x4===true){

                    }
                }  
                var mute5v=function(){
                    if(x5){
                        if (x5===1){
                            sound5.volume=0;
                            console.log("Yes")
                        } else {
                            sound5.volume=1;
                        }
                    }
                }
                var dump = document.getElementById("dump");

                var onDumpClick=function(){
                    playTone(345,sine, 1);
                }
                function getOffset(el) {
                    const rect = el.getBoundingClientRect();
                    return {
                        left: rect.left + window.scrollX,
                        top: rect.top + window.scrollY
                    };

                } 
        // Make the DIV element draggable:

            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "header")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    if(elmnt.offsetTop-pos2 <=500 && elmnt.offsetTop-pos2 >= 335){
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    }
                    //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
                //fader1
                function getPosition(){
                console.log(elmnt.style.top)
                var vol1=(Math.abs((elmnt.style.top-670)/170));
                console.log(vol1)
                }
                
            }
window.onload = function(){
    var x5 = document.getElementById("ab5").value;
    var s5 = document.getElementById("ab5");
    var f3=document.getElementById("fader3")
    var sound5 = document.getElementsByClassName("soundboard");
    var m1=document.getElementById("mute1");
    var m2=document.getElementById("mute2");
    var m3=document.getElementById("mute3");
    var m4=document.getElementById("mute4");
    var m5=document.getElementById("mute5");
    s5.addEventListener("click", function(){
        mute5v();
    });
    f3.addEventListener("click", function() {
        getPosition();
        //getOffset(f3)
    });
    
    dragElement(document.getElementById("fader1"));
    dragElement(document.getElementById("fader2"));
    dragElement(document.getElementById("fader3"));
    dragElement(document.getElementById("fader4"));
    dragElement(document.getElementById("fader5"));
    dragElement(document.getElementById("fader6")) 
    var song_2 = document.getElementById("track_2"); 
    song_2.addEventListener("click", onGoClick());
}
            var a1 = document.getElementById("a1");

            function a1play(){
                a1.play();
            }
            var a2 = document.getElementById("a2");

            function a2play(){
                a2.play();
            }
            var a8 = document.getElementById("a8");
            
            function a8play(){
                a8.play();
            }
            var go = document.getElementById("2done");
            var song2 = document.getElementById("choosetrack_2");
           
            var song2play;
            var deck2=document.getElementById("turntable2");
            var onGoClick = function(){
            if (song2="867"){
                song2play="867";
                document.getElementById("turntable2").innerHTML="<audio controls><source src='music/01 867-5309 _ Jenny.mp3' type='audio/mpeg'></audio>";
            } else if (song2="nosun"){
                song2play="nosun"
                document.getElementById("turntable2").innerHTML="<audio controls><source src='music/01 Ain't No Sunshine (Single Version).mp3'></audio>";
            } else if (song2="modernlove") {
                song2play="modernlove";
                document.getElementById("turntable2").innerHTML="<audio controls><source src='music/01 Modern Love.mp3'></audio>";
            } else if (song2="howardjones") {
                deck2.innerHTML="<audio controls><source src='music/01 Things Can Only Get Better (2018 Remaster).mp3'></audio>"
            }
        }
        //go.addEventListener("click", onGoClick());
            
 
    let audioIN = { audio: true };
    //  audio is true, for recording
 
    // Access the permission for use
    // the microphone
    navigator.mediaDevices.getUserMedia(audioIN)
 
      // 'then()' method returns a Promise
      .then(function (mediaStreamObj) {
 
        // Connect the media stream to the
        // first audio element
        let audio = document.querySelector('audio');
        //returns the recorded audio via 'audio' tag
 
        // 'srcObject' is a property which 
        // takes the media object
        // This is supported in the newer browsers
        if ("srcObject" in audio) {
          audio.srcObject = mediaStreamObj;
        }
        else {   // Old version
          audio.src = window.URL
            .createObjectURL(mediaStreamObj);
        }
 
        // It will play the audio
        audio.onloadedmetadata = function (ev) {
 
          // Play the audio in the 2nd audio
          // element what is being recorded
          audio.play();
        };
 
        // Start record
        let start = document.getElementById('btnStart');
 
        // Stop record
        let stop = document.getElementById('btnStop');
 
        // 2nd audio tag for play the audio
        let playAudio = document.getElementById('adioPlay');
 
        // This is the main thing to recorded 
        // the audio 'MediaRecorder' API
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        // Pass the audio stream 
 
        // Start event
        start.addEventListener('click', function (ev) {
          mediaRecorder.start();
          // console.log(mediaRecorder.state);
        })
 
        // Stop event
        stop.addEventListener('click', function (ev) {
          mediaRecorder.stop();
          // console.log(mediaRecorder.state);
        });
 
        // If audio data available then push 
        // it to the chunk array
        mediaRecorder.ondataavailable = function (ev) {
          dataArray.push(ev.data);
        }
 
        // Chunk array to store the audio data 
        let dataArray = [];
 
        // Convert the audio data in to blob 
        // after stopping the recording
        mediaRecorder.onstop = function (ev) {
 
          // blob of type mp3
          let audioData = new Blob(dataArray, 
                    { 'type': 'audio/mp3;' });
           
          // After fill up the chunk 
          // array make it empty
          dataArray = [];
 
          // Creating audio url with reference 
          // of created blob named 'audioData'
          let audioSrc = window.URL
              .createObjectURL(audioData);
 
          // Pass the audio url to the 2nd video tag
          playAudio.src = audioSrc;
        }
      })
 
      // If any error occurs then handles the error 
      .catch(function (err) {
        console.log(err.name, err.message);
      });
        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
                document.body.style.backgroundColor = "white";
            }