const repeatString = function (str, num) {
  let answer = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      toString(str);
      answer = answer + str;
      console.log(str);
    }
    return answer;
  }
};
// Do not edit below this line
module.exports = repeatString;
