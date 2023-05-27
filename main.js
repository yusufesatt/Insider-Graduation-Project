let allDivs = document.querySelectorAll(".colHead");
let prevDiv = null;

for(let i = 0; i < allDivs.length; i++) {
  allDivs[i].addEventListener("click", function() {
    if(prevDiv !== null) {
      prevDiv.style.backgroundColor = "";
    }
    this.style.backgroundColor = "#2a2a2c";
    prevDiv = this;
  });
}

var row = document.getElementById("row1");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    this.style.backgroundColor = "#0dc75b";
  });
}




document.getElementById("row1Green").addEventListener("click", function() {
    this.style.backgroundColor = "#0dc75b";
  });

  
  document.getElementById("row2Red").addEventListener("click", function() {
    this.style.backgroundColor = "#ff054a";
  });
  
  document.getElementById("row3Orange").addEventListener("click", function() {
    this.style.backgroundColor = "#ff7317";
  });

  document.getElementById("row4Yellow").addEventListener("click", function() {
    this.style.backgroundColor = "#f5b916";
  });

  document.getElementById("row5Blue").addEventListener("click", function() {
    this.style.backgroundColor = "#1acbf7";
  });

  document.getElementById("row6Purple").addEventListener("click", function() {
    this.style.backgroundColor = "#8056f5";
  });

  document.getElementById("row7Pink").addEventListener("click", function() {
    this.style.backgroundColor = "#ff74b6";
  });
  
  document.getElementById("row8Raspberry").addEventListener("click", function() {
    this.style.backgroundColor = "#c6194d";
  });


  
