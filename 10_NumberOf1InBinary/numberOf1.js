var numberOf1 = function (n) {
  var count = 0,
    flag = 1;
  while (flag) {
    if (n & flag) {
      count++
    }
    flag = flag << 1
  }
  console.log(count)
  return count
}

// console.log(numberOf1(100))
numberOf1(3)
numberOf1(7)
numberOf1(6)
numberOf1(5)