const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let ans = num1 - num2;
  return ans;
};

const sum = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
  }
  return sum;
};

const multiply = function (nums) {
  let ans = 1;

  for (let i = 0; i < nums.length; i++) {
    ans *= parseInt(nums[i]);
  }
  return ans;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let ans = 1;

  for (let i = num; i >= 1; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
