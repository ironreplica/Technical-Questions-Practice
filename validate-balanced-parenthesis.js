//---------check if a string of parentheses is balanced---
var input1 = "({[()]})";
var input2 = "({[([)]]})";

function isBalancedBrackets(input) {
  var inputArr = input.split("");
  for (var i = 0; i <= inputArr.length + 1; i++) {
    if (
      (inputArr[0] == "(" && inputArr[inputArr.length - 1] == ")") ||
      (inputArr[0] == "{" && inputArr[inputArr.length - 1] == "}") ||
      (inputArr[0] == "[" && inputArr[inputArr.length - 1] == "]")
    ) {
      inputArr.splice(0, 1);
      inputArr.splice(inputArr.length - 1, 1);
    }
  }

  return inputArr.length > 1 ? false : true;
}

console.log(isBalancedBrackets(input1));
console.log(isBalancedBrackets(input2));
