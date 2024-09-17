//--------Check For Palindrome-------------
var input = "racecar";
var input2 = "tesla";

function isPalindrome(input) {
  var backwardsArr = [];
  for (var i = input.length - 1; i >= 0; i--) {
    backwardsArr.push(input[i]);
  }
  return backwardsArr.join("") === input ? true : false;
}

console.log(isPalindrome(input));
console.log(isPalindrome(input2));
