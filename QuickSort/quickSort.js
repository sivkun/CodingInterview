var utils = require('./utils')
var partition = utils.partition;
var quickSort = function (arr, start, end) {
  if (start == end) {
    return
  }
  var index = partition(arr, start, end)
  if (index > start) {
    quickSort(arr, start, index - 1)
  }
  if (index < end) {
    quickSort(arr, index + 1, end)
  }
}

// var arr = [27, 9, 21, 8, 7, 15, 6, 9, 5, 4, 4, 8, 9, 3, 4, 10, 3, 2, 1]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)


exports.quickSort = quickSort;