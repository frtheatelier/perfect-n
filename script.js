// CHECK VALUE
function find_factors(i) {
  let factors = [1];
  let root = Math.ceil(Math.sqrt(i));
  for (let j = 2; j <= root; j++) {
    console.log(j, root, Math.sqrt(i), i)
    if (i % j == 0 && !factors.includes(j)) {
      factors.push(j);
      factors.push(i / j);
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
var n = parseInt(document.getElementById("input").value);

console.log(n)
  
  document.getElementById("n-value").innerHTML = n;
  document.getElementById("perf").innerHTML = analysis(n);
  
  let f = find_factors(n);
  f.push(n)
  document.getElementById("factors").innerHTML = f.sort();
  document.getElementById("res").showModal();
}

function hideRes() {
  document.getElementById("res").close();
}
