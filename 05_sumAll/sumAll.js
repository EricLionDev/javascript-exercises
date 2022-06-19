const sumAll = function (num1, num2) {
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  let sum = 0;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (start < 0) {
    return "ERROR";
  } else {
    for (i = start; i <= end; i++) {
      sum = sum + i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
