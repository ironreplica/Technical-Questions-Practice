//----binary search algorithm to find the index of a target value in an array
inputArray = [1, 3, 5, 7, 9];

// Using Array Prototype Method
function theEasyWay(input, target) {
  return input.findIndex((element) => element == target);
}

// From Scratch
function theHardway(input, target) {
  curIndex = 0;
  for (var i = 0; i < input.length; i++) {
    curIndex = i;
    if (input[i] == target) break;
  }
  return curIndex < input.length - 1 ? curIndex : -1;
}

console.log(theEasyWay(inputArray, 10));
console.log(theHardway(inputArray, 10));
