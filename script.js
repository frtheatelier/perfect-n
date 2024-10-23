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

const helloWorld = new Question("Getting started...", "QNUUXIEX UM", "HELLO WORLD", 9)
const goodLuck = new Question("Good luck!", "RGUQ PQPAUW", "BREAK A LEG", 16)
const catTongue = new Question("I'm speechless...", "ECVBIQVB QWTBVQPIWG", "CAT GOT YOUR TONGUE", 2)
const downBlazing = new Question("Cancel-worthy", "S LP HZLUZLRXMYQD", "GO DOWN IN FLAMES", 39)
const doneDead = new Question("Waiting to respawn", "UEMDQWEHQJYVQTEKDJ", "DOWN FOR THE COUNT", 17)

const qs = [helloWorld, goodLuck, catTongue, downBlazing, doneDead]
const r = Math.floor(Math.random() * qs.length);

document.getElementById("theme").innerHTML = qs[r].theme
document.getElementById("cyphertext").innerHTML = qs[r].cyphertext

