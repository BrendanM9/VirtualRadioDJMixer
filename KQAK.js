const data1 = require('./lib.json');
console.log("data1 /n", data1);
document.getElementById("Song1").innerHTML = "data1[1].song"

fetch('./lib.json')
.then(response => {
  return(response.json();
})
.then(data => console.log(data));
