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


document.getElementById("col1Green").addEventListener("click", function() {
    this.style.backgroundColor = "#0dc75b";
  });
  

  document.getElementById("col2Red").addEventListener("click", function() {
    this.style.backgroundColor = "#ff054a";
  });
  
  document.getElementById("col3Orange").addEventListener("click", function() {
    this.style.backgroundColor = "#ff7317";
  });

  document.getElementById("col4Yellow").addEventListener("click", function() {
    this.style.backgroundColor = "#f5b916";
  });

  document.getElementById("col5Blue").addEventListener("click", function() {
    this.style.backgroundColor = "#1acbf7";
  });

  document.getElementById("col6Purple").addEventListener("click", function() {
    this.style.backgroundColor = "#8056f5";
  });

  document.getElementById("col7Pink").addEventListener("click", function() {
    this.style.backgroundColor = "#ff74b6";
  });
  
  document.getElementById("col8Raspberry").addEventListener("click", function() {
    this.style.backgroundColor = "#c6194d";
  });


  
