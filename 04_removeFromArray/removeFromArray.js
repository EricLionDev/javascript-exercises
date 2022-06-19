const removeFromArray = function (array, ...removeThese) {
  let arrayStart = array;
  let arrayRemove = removeThese;
  for (let i = 0; i < removeThese.length; i++) {
    arrayStart = arrayStart.filter((num) => num !== removeThese[i]);
  }

  return arrayStart;
};

// Do not edit below this line
module.exports = removeFromArray;
