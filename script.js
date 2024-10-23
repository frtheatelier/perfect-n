// KEY TABLE
var keys = document.getElementById("keyTable");
var table = document.createElement("table");

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ']

const tr = table.insertRow();
for (let i = 0; i < 27; i++) {
    const td = tr.insertCell();
    let txt = document.createTextNode(`${letters[i]}`)
    td.appendChild(txt);
    td.style.border = '1px solid black';
    td.style.padding = '3px';
}
const tr2 = table.insertRow();
for (let i = 0; i < 27; i++) {
    const td = tr2.insertCell();
    let txt = document.createTextNode(`${i}`)
    td.appendChild(txt);
    td.style.border = '1px solid black';
    td.style.padding = '3px';
}
keys.appendChild(table);

// SHOW INFO
function info() {
  document.getElementById("infoDialog").showModal();
}

function showKeys() {
  var x = document.getElementById("keyTable");
  if (x.style.display === "none") {
    x.style.display = "block";
    console.log("keys");
  } else {
    x.style.display = "none";
    console.log("keys hide");
  }
}