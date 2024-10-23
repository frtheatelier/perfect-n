// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

// BUTTON MOVEMENT (from template)
const btn = document.querySelector("button");
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    btn.classList.toggle("dipped");
  };
}

// RANDOMISE Q

class Question {
  constructor(t, c, a, k) {
    this.theme = t;
    this.cyphertext = c;
    this.answer = a;
    this.key = k;
  }
}

const helloWorld = new Question("Getting started", "QNUUXIEX UM", "HELLO WORLD", 9)

const qs = [helloWorld]
const r = Math.floor(Math.random() * qs.length);

document.getElementById("theme").innerHTML = qs[r].theme
document.getElementById("cyphertext").innerHTML = qs[r].cyphertext
document.getElementById("theme").innerHTML = qs[r].theme