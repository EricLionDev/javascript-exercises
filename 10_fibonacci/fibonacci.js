const fibonacci = function (num) {
  if (num > 0) {
    let fib = [1, 1];
    for (let i = 1; i < num; i++) {
      let nextNum = fib[i] + fib[i - 1];
      fib.push(nextNum);
    }
    return fib[num - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
