//------Merge to sorted arrays---------
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

// Using array methods
function mergeTwoSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort();
}

console.log(mergeTwoSortedArrays(arr1, arr2));
