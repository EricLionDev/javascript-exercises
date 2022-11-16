const palindromes = function (str) {
  str = str
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s/g, "");
  let reverse = reverseString(str);

  console.log("Str: " + str);
  console.log("reverse: " + reverse);
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
};

const reverseString = function (str) {
  let strArray = str.split("");
  let answer = "";
  for (i = str.length - 1; i >= 0; i--) {
    answer = answer + strArray[i];
  }
  return answer;
};

// Do not edit below this line
module.exports = palindromes;
