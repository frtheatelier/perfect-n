// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

// KEY TABLE
var keys = document.getElementById("keyTable");
var table = document.createElement("table");

const arr = [
    ['A', 0],
    ['B', 1],
    ['C', 2],
    ['D', 3],
    ['E', 4],
    ['F', 5],
    ['G', 6],
    ['H', 7],
    ['I', 8],
    ['J', 9],
    ['K', 10],
    ['L', 11],
    ['M', 12],
    ['N', 13],
    ['O', 14],
    ['P', 15],
    ['Q', 16],
    ['R', 17],
    ['S', 18],
    ['T', 19],
    ['U', 20],
    ['V', 21],
    ['W', 22],
    ['X', 23],
    ['Y', 24],
    ['Z', 25],
    [' ', 26]
  ]

for (let i = 0; i < 2; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < 28; j++) {
        const td = tr.insertCell();
        let txt = document.createTextNode(`tx`)
        td.appendChild(txt);
        td.style.border = '1px solid black';
    }
  }
  keys.appendChild(table);


// RANDOMISE Q
class Question {
  constructor(t, c, a, k, h) {
    this.theme = t;
    this.ciphertext = c;
    this.answer = a;
    this.key = k;
    this.hint = h;
  }
}

const helloWorld = new Question(
  "Getting started...",
  "QNUUXIEX UM",
  "HELLO WORLD",
  9,
  "_____ ____D"
);
const goodLuck = new Question(
  "Good luck!",
  "RGUQ PQPAUW",
  "BREAK A LEG",
  16,
  "_____ _ __G"
);
const catTongue = new Question(
  "I'm speechless...",
  "ECVBIQVB QWTBVQPIWG",
  "CAT GOT YOUR TONGUE",
  2,
  "___ ___ ____ _____E"
);
const downBlazing = new Question(
  "Cancel-worthy",
  "S LP HZLUZLRXMYQD",
  "GO DOWN IN FLAMES",
  39,
  "__ ____ __ _____S"
);
const doneDead = new Question(
  "Waiting to respawn",
  "UEMDQWEHQJYVQTEKDJ",
  "DOWN FOR THE COUNT",
  17,
  "____ ___ ___ ____T"
);

const qs = [helloWorld, goodLuck, catTongue, downBlazing, doneDead];
const r = Math.floor(Math.random() * qs.length);

document.getElementById("theme").innerHTML = qs[r].theme;
document.getElementById("ciphertext").innerHTML = qs[r].ciphertext;
document.getElementById("sp-hint").innerHTML = qs[r].hint;

// SHOW HINT
function hint() {
  document.getElementById("hintDialog").showModal();
}

function sp_hint() {
  var x = document.getElementById("sp-hint");
  if (x.style.display === "none") {
    x.style.display = "block";
    console.log("hint");
  } else {
    x.style.display = "none";
    console.log("hiint");
  }
}

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

// CHECK ANS
let guesses = 0;
document.getElementById("guesses").innerHTML = guesses;

function guess() {
  let ans = document.getElementById("answer").value;
  if (ans == qs[r].answer) {
    document.getElementById("res").innerHTML = guesses + 1;
    document.getElementById("winDialog").showModal();
  } else {
    guesses += 1;
    document.getElementById("guesses").innerHTML = guesses;
  }
}
