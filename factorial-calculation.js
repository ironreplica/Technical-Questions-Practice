//--------Function to calculate the factorial of given `n`
function getFactorial(input) {
  var factorial = 1;
  for (var i = input; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(getFactorial(5));
