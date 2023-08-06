/*//var x5 = document.getElementById("ab5").value;
                var s5 = document.getElementById("ab5");
                var sound5 = document.getElementsByClassName("soundboard");
                var m1=document.getElementById("mute1");
                var m2=document.getElementById("mute2");
                var m3=document.getElementById("mute3");
                var m4=document.getElementById("mute4");
                var m5=document.getElementById("mute5");
                var x4=$("#mute4").is(":checked");
                function getOffset(el) {
                    const rect = el.getBoundingClientRect();
                    return {
                        left: rect.left + window.scrollX,
                        top: rect.top + window.scrollY
                    };
                } 
                var mute4v=function(){
                    if (x4===true){

                    }
                }  
                var mute5v=function(){
                    if (x5===1){
                        sound5.volume=0;
                    } else {
                        sound5.volume=1;
                    }
                }
                s5.addEventListener("click", mute5v());*/
                // Make the DIV element draggable:
            dragElement(document.getElementById("fader1"));
            dragElement(document.getElementById("fader2"));
            dragElement(document.getElementById("fader3"));
            dragElement(document.getElementById("fader4"));
            dragElement(document.getElementById("fader5"));
            dragElement(document.getElementById("fader6"))

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
            }
            var a1 = document.getElementById("a1");

            function a1play(){
                a1.play();
            }
            var a2 = document.getElementById("a2");

            function a2play(){
                a2.play();
            }