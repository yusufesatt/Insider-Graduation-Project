document.addEventListener("DOMContentLoaded", function() {
  // Parent container
  var container = document.createElement("div");
  container.className = "container";

  // Define colors for each row
  var rowColors = [
    { id: "row1Green", color: "#0dc75b" },
    { id: "row2Red", color: "#ff054a" },
    { id: "row3Orange", color: "#ff7317" },
    { id: "row4Yellow", color: "#f5b916" },
    { id: "row5Blue", color: "#1acbf7" },
    { id: "row6Purple", color: "#8056f5" },
    { id: "row7Pink", color: "#ff74b6" },
    { id: "row8Raspberry", color: "#c6194d" }
  ];

  // Create rows and columns
  for (var i = 0; i < rowColors.length; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.id = rowColors[i].id;

    var colHead = document.createElement("div");
    colHead.className = "colHead";
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
  document.body.appendChild(container);

  // Add click events to individual divs and colHeads
  var allDivs = document.getElementsByClassName("col");
  var allColHeads = document.getElementsByClassName("colHead");
  
  for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener("click", function() {
      if (this.style.backgroundColor === "") {
        var rowId = this.parentNode.id;
        var rowColor = getRowColor(rowId);
        this.style.backgroundColor = rowColor;
      } else {
        this.style.backgroundColor = "";
      }
    });
  }
  
  for (var i = 0; i < allColHeads.length; i++) {
    allColHeads[i].addEventListener("click", function() {
      if (this.style.backgroundColor === "") {
        var rowId = this.parentNode.id;
        var rowColor = getRowColor(rowId);
        this.style.backgroundColor = rowColor;
      } else {
        this.style.backgroundColor = "";
      }
    });
  }

  // Get the color of the row based on the row id
  function getRowColor(rowId) {
    for (var i = 0; i < rowColors.length; i++) {
      if (rowColors[i].id === rowId) {
        return rowColors[i].color;
      }
    }
    return "";
  }
});