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

let musicList = [];

/* 1. Satır Green tüm divlerin renklendirmesi */ 
var row = document.getElementById("row1");
var divs = row.getElementsByClassName('col');

for(var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    musicList.push('./sounds/808 (bass bu kankalar).wav')

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
    musicList.push('./sounds/hi hat - orkunisitmak.wav');

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
    musicList.push('./sounds/Kick - Retro.wav');

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
    musicList.push('./sounds/open hat.wav');

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
    musicList.push('./sounds/Perc - Tambo.wav');

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
    musicList.push('./sounds/rim shot.wav');

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
    musicList.push('./sounds/Snare - Snapper.wav');

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
    musicList.push('./sounds/sound1.mp3');

    if (this.style.backgroundColor === "rgb(198, 25, 77)") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "#c6194d";
    }
  });
}

document.getElementById('play-button').addEventListener('click', function () {
  console.log(musicList);

  let index = 0;
  let audio = new Audio(musicList[index]);

  audio.onended = function () {
    index++;
    if (index < musicList.length) {
      audio.src = musicList[index];
      audio.play();
    }
  };

  audio.play();
});

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

/*

butona tıklandığında renkli olunca üzerine gelince hover efekti uygulanması için ama hatalı kod 

$(document).ready(function() {
    $(".row1Green").hover(function() {
      $(this).css('background-color', '#0ea34d');
    }, function() {
      $(this).css('background-color', '#0dc75b');
    });
  });
*/



/* */

// $(document).ready(function() {
//     $(".row1ClickGray").click(function() {
//       var rowDivs = $(this).closest("#row1").find(".row1ClickGray");
//       rowDivs.not($(this).parent()).css('background-color', '#89898a');
//     });
//   });



/*chat gpt üsttekini düzeltmiş hali*/

// var row = document.getElementById("row1");
// var divs = row.getElementsByClassName('col');

// for (var i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function(event) {
//     event.stopPropagation(); // Tıklama olayının yayılmasını engeller

//     var clickedDiv = this;
//     var rowDivs = row.getElementsByClassName('col');

//     // Satırın diğer div öğelerinin arka plan rengini kontrol eder
//     for (var j = 0; j < rowDivs.length; j++) {
//       if (rowDivs[j] !== clickedDiv) {
//         if (rowDivs[j].style.backgroundColor === "rgb(13, 199, 91)") {
//           rowDivs[j].style.backgroundColor = "";
//         } else {
//           rowDivs[j].style.backgroundColor = "#0dc75b";
//         }
//       }
//     }

//     // Tıklanan divin arka plan rengini değiştirir
//     if (clickedDiv.style.backgroundColor === "#0dc75b") {
//       clickedDiv.style.backgroundColor = "";
//     } else {
//       clickedDiv.style.backgroundColor = "#0dc75b";
//     }
//   });
// }

// var row = document.getElementById("row1");
// var divs = row.getElementsByClassName('col');

// for (var i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function(event) {
//     event.stopPropagation(); // Tıklama olayının yayılmasını engeller

//     var clickedDiv = this;
//     var rowDivs = row.getElementsByClassName('col');

//     // Satırın diğer div öğelerinin arka plan rengini kontrol eder
//     for (var j = 0; j < rowDivs.length; j++) {
//       if (rowDivs[j] !== clickedDiv) {
//         if (rowDivs[j].style.backgroundColor === "rgb(13, 199, 91)") {
//           rowDivs[j].style.backgroundColor = "";
//         } else {
//           rowDivs[j].style.backgroundColor = "#0dc75b";
//         }
//       }
//     }

//     // Tıklanan divin arka plan rengini değiştirir
//     if (clickedDiv.style.backgroundColor === "rgb(13, 199, 91)") {
//       clickedDiv.style.backgroundColor = "";
//     } else {
//       clickedDiv.style.backgroundColor = "#0dc75b";
//     }
//   });
// }





/*
HER COLUMNA AYRI BİR ARRAY ATA VE O COLUMNDAKİ TUŞLARA DOKUNULDUĞUNDA O ARRAYA AT İNDEXİ. HER COLUMNA AYRI BİR ARRAYA ATADIĞIMIZ İÇİN ARRAYLERİ SIRAYLA ÇALIŞTIR.

*/