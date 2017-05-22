const sortAges = function (ages) {
  if (ages == null || !Array.isArray(ages) || ages.length <= 0) {
    return
  }
  var oldestAge = 99
  var timesOfAge = Array(oldestAge + 1)
  for (var i = 0; i <= oldestAge; ++i) {
    timesOfAge[i] = 0
  }
  for (i = 0; i < ages.length; ++i) {
    var age = ages[i]
    if (age < 0 || age > oldestAge) {
      throw new Error("年龄超出范围")
    }
    ++timesOfAge[age]
  }
  var index = 0
  for (i = 0; i < oldestAge; ++i) {
    for (var j = 0; j < timesOfAge[i]; ++j) {
      ages[index] = i
      ++index  
    }
  }
}


var ages = [1, 2, 3, 1, 3, 4, 5, 3, 4, 3, 2, 2,11, 1, 3, 4, 5, 3, 6, 7, 54, 44, 33, 44, 44, 33]
sortAges(ages)
console.log(ages)
