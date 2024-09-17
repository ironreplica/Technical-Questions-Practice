//--------Array of integers and returns the sum-----
function sumOfArray(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

console.log(sumOfArray([1, 2, 3, 4]));
