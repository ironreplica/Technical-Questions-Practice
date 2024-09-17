//-------Reverse a string----------
var input = "hello";

function reverseString(input) {
  var newString = [];
  for (var i = input.length; i > 0; i--) {
    newString.push(input[i]);
  }
  return newString.join("");
}

console.log(reverseString(input));
