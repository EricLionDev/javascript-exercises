const getTheTitles = function (arr) {
  const bookNames = arr.map((book) => book.title);
  console.table(bookNames);
  return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
