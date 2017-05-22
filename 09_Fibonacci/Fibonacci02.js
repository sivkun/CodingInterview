var fibonacci = function fibonacci(n) {
  var result = [0, 1]
  if(n<2){
    return result[n]
  }
  var fibOne = 1,
    fibTwo = 0,
    fibN = 0
  for(var i = 2; i <= n; ++i){
    fibN = fibOne + fibTwo

    fibTwo = fibOne
    fibOne = fibN
  }
  return fibN
}

console.log(fibonacci(10))