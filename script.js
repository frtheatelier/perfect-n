// CHECK VALUE
var n = document.getElementById("n-input").value;

function find_factors(i) {
  let factors = [1];
  let root = Math.ceil(Math.sqrt(i));
  for (let j = 0; j <= root; j++) {
    if (i % j == 0 && !factors.includes(j)) {
      console.log(j)
      factors.append(j);
      factors.append(i / j);
      console.log("append", j)
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
  if (check_perfect(i)){
    return "A"
  } else {
    return "NOT A"
  }
}

// SHOW INFO
function showRes() {
  document.getElementById("n-value").innerHTML = n;
  document.getElementById("perf").innerHTML = analysis(n);
  document.getElementById("factors").innerHTML = find_factors(n);
  document.getElementById("res").showModal();
}

function hideRes() {
  document.getElementById("res").close();
}
