const isArray = function (arr) {
  return Object.prototype.toString.call(arr) === "[object Array]"
}
const randomInRange = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start)
}

const swap = function (arr, i, j) {
  var tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
const partition = function partition(arr, start, end) {
  if (arr == null || !isArray(arr) || arr.length <= 0 || start < 0 || end >= arr.length) {
    throw new Error('function partition 非法参数！')
  }
  var index = randomInRange(start, end)
  swap(arr, index, end)
  var small = start - 1
  for (index = start; index < end; ++index) {
    if (arr[index] < arr[end]) {
      ++small
      if (small != index) {
        swap(arr, index, small)
      }
    }
  }
  ++small
  swap(arr, small, end)
  return small
}
module.exports = {
  isArray,
  swap,
  partition,
  randomInRange
}