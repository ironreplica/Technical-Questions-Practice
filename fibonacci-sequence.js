//-------Generates the first `n` numbers in Fibonacci Sequence----
function fibonacciSequence(input) {
  var sequenceArr = [];
  for (var i = 0; i < input; i++) {
    i == 0
      ? sequenceArr.push(0)
      : i == 1
      ? sequenceArr.push(1)
      : sequenceArr.push(sequenceArr[i - 1] + sequenceArr[i - 2]);
  }
  return sequenceArr;
}
console.log(fibonacciSequence(15));
