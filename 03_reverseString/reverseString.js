const reverseString = function (str) {
  let strArray = str.split("");
  let answer = "";
  for (i = str.length - 1; i >= 0; i--) {
    answer = answer + strArray[i];
    console.log("answer: " + answer);
    console.log("index: " + strArray[i]);
  }
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
