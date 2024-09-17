//-----Find the first non repeating character----
var input = "swiss";
var input2 = "dood";
function nonRepeatingCharacter(input) {
  inputArr = input.split("");
  for (var i = 0; i < inputArr.length; i++) {
    letterCount = 0;
    for (var x = 0; x < inputArr.length; x++) {
      if (inputArr[i] == inputArr[x]) {
        letterCount++;
      } else if (x == inputArr.length - 1 && letterCount === 1) {
        return inputArr[i];
      }
    }
  }
  return null;
}

console.log(nonRepeatingCharacter(input));
