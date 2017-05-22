var numberOf1 = function (n) {
  var count = 0
  while (n) {
    ++count
    n = n & (n - 1)
  }
  return count
}

console.log(
  numberOf1(0),
  numberOf1(1),
  numberOf1(2),
  numberOf1(3),
  numberOf1(4),
  numberOf1(6),
  numberOf1(7),
  numberOf1(8),
  numberOf1(9)
)