// Parent container
var container = document.createElement("div");
container.className = "container";

// Define colors for each row
var colors = [
  "row1Green",
  "row2Red",
  "row3Orange",
  "row4Yellow",
  "row5Blue",
  "row6Purple",
  "row7Pink",
  "row8Raspberry"
];

// Create rows and columns
for (var i = 0; i < colors.length; i++) {
  var row = document.createElement("div");
  row.className = "row";
  row.id = "row" + (i + 1);

  var colHead = document.createElement("div");
  colHead.className = "colHead";
  colHead.id = "row" + (i + 1) + colors[i];
  row.appendChild(colHead);

  for (var j = 0; j < 12; j++) {
    var col = document.createElement("div");
    col.className = "col";
    if (j % 3 === 0) {
      col.className += " gray-div";
    }
    row.appendChild(col);
  }

  container.appendChild(row);
}

// Append container to the body after page is loaded
document.addEventListener("DOMContentLoaded", function() {
  document.body.appendChild(container);
});



/* 1. Satır Green tüm divlerin renklendirmesi */ 
var row = document.getElementById("row1");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(13, 199, 91)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#0dc75b";
    }
  });
}


/*2. Satır kırmızı tüm divlerin renklendirmesi */
var row = document.getElementById("row2");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(255, 5, 74)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#ff054a";
    }
  });
}

/* 3. Satır orange tüm divlerin renklendirmesi */

var row = document.getElementById("row3");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(255, 115, 23)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#ff7317";
    }
  });
}

/* 4. Satır yellow tüm divlerin renklendirmesi */

var row = document.getElementById("row4");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(245, 185, 22)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#f5b916";
    }
  });
}

/* 5. Satır blue tüm divlerin renklendirmesi */

var row = document.getElementById("row5");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(26, 203, 247)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#1acbf7";
    }
  });
}

/* 6. Satır purple tüm divlerin renklendirmesi */

var row = document.getElementById("row6");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(128, 86, 245)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#8056f5";
    }
  });
}

/* 7. Satır pink tüm divlerin renklendirmesi */

var row = document.getElementById("row7");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(255, 116, 182)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#ff74b6";
    }
  });
}

/* 8. Satır raspberry tüm divlerin renklendirmesi */

var row = document.getElementById("row8");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    if (this.style.backgroundColor === "rgb(198, 25, 77)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#c6194d";
    }
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



  
  
