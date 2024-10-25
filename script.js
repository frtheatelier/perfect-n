// CHECK VALUE
var n = document.getElementById("n-value").value;

function find_factors(i) {
    let factors = [1]
    sqrt = Math.ceil(Math.sqrt(i))
    for (let j = 0; j <= sqrt; j++) {
      if (i % j == 0){
        factors.append(j)
      }
    }

    return factors
}


function check_perfect(n: int) -> bool:
    """check if n is perfect"""
    factors = find_factors(n)
    # print(factors)
    return sum(factors) == n

// SHOW INFO
function showRes() {
  document.getElementById("res").showModal();
}

function hideRes() {
  document.getElementById("res").close();
}