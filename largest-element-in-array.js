//--------Find largest element in an array
var input = [10, 20, 30, 5];

function findGreatestNumber(arr) {
  var largestNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      largestNum = arr[i];
    } else {
      largestNum < arr[i] ? (largestNum = arr[i]) : (largestNum = largestNum);
    }
  }
  return largestNum;
}
console.log(findGreatestNumber(input));
