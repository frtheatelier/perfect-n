const counter = 0;

// CHECK VALUE
function find_factors(i) {
  let factors = [1];
  let root = Math.ceil(Math.sqrt(i));
  for (let j = 2; j <= root; j++) {
    console.log(j, root, Math.sqrt(i), i);
    if (i % j == 0 && !factors.includes(j)) {
      factors.push(j);
      if (!factors.includes(i / j)) {
        factors.push(i / j);
      }
      console.log("append", j);
    }
  }

  return factors;
}

function check_perfect(i) {
  let f = find_factors(i);
  let sum = 0;
  f.forEach((number) => {
    sum += number;
  });

  return f, sum == i;
}

function analysis(i) {
  if (check_perfect(i)) {
    addNumber(i);
    return "A";
  } else {
    return "NOT A";
  }
}

// SHOW INFO
function showRes() {
  document.getElementById("nan-alert").innerHTML = "";

  var n = parseInt(document.getElementById("input").value);

  console.log(isNaN(n));

  if (isNaN(n)) {
    document.getElementById("nan-alert").innerHTML = "Please enter a number :(";
    return;
  }

  console.log(n);

  document.getElementById("n-value").innerHTML = n;
  document.getElementById("perf").innerHTML = analysis(n);

  let f = find_factors(n);
  if (!f.includes(n)) {
    f.push(n);
  }
  f.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("factors").innerHTML = f;
  document.getElementById("res").showModal();
}

function hideRes() {
  document.getElementById("res").close();
}

// ADD TO KNOWN NUMBERS

function addNumber(n) {
  console.log("adding number...");

  //   if (!document.getElementById("numbers")) {
  //     const numlist = document.createElement('ul');
  //     numlist.setAttribute("id", "numbers");

  //     console.log("created!")
  //   }

  let arr = [];

  for (let index = 1; index < 5; index++) {
    var content = parseInt(document.getElementById("num" + index).innerHTML);
    console.log(
      "num" + index + ": " + content
    );

    if (isNaN(content) && !arr.includes(n)) { // empty slot and number not included
      document.getElementById("num" + index).innerHTML = n;
      return;
    } else if (!isNaN(content)) { // slot is filled with a existing number
      arr.push(content);
    }
  }

  console.log("number added. hopefully.");
}
