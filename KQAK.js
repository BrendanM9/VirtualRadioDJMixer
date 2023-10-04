/*const data1 = require('./lib.json');
console.log("data1 /n", data1);
document.getElementById("Song1").innerHTML = "data1[1].song"

fetch('./lib.json')
.then(response => {
  return(response.json());
})
.then(data => console.log(data));
*/
var songno = .1;
for(var i = 0; i < 190; i++){
  songno = Math.floor(Math.random() * 190);
  console.log(songno)
}