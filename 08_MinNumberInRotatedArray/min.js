"use strict"
var min = function (arr) {
  if (arr == null || !Array.isArray(arr) || arr.length <= 0) {
    throw new Error('Invalid parameters')
  }
  var index1 = 0, index2 = arr.length - 1, indexMid = index1
  while (arr[index1] >= arr[index2]) {
    if (index2 - index1 === 1) {
      indexMid = index2
      break
    }
    indexMid = Math.floor((index1 + index2) / 2)

    if (arr[index1] === arr[index2] &&
      arr[indexMid] === arr[index1]) {
      return MinInOrder(arr, index1, index2)
    }

    if (arr[indexMid] >= arr[index1]) {
      index1 = indexMid
    } else if (arr[indexMid] <= arr[index2]) {
      index2 = indexMid
    }

  }
  return arr[indexMid]
}

var MinInOrder = function (arr, index1, index2) {
  var result = arr[index1];
  for (var i = index1 + 1; i <= index2; ++i) {
    if (result > arr[i]) {
      result = arr[i]
    }

  }
  return result;
}

var arr1 = [4, 5, 6, 1, 1, 2, 3],
  arr2 = [1, 1, 1, 1, 1],
  arr3 = [1, 1, 1, 1, 1, 0, 1],
  arr4 = [0],
  arr5 = [],
  arr6 = [1, 2, 3, 4, 5, 6]
console.log(min(arr1))
console.log(min(arr2))
console.log(min(arr3))
console.log(min(arr4))
console.log(min(arr6))
console.log(min(arr5))