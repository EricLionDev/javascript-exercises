const findTheOldest = function (arr) {
  const oldest = arr.sort((a, b) =>
    getAge(a.yearOfBirth, a.yearOfDeath) > getAge(b.yearOfBirth, b.yearOfDeath)
      ? 1
      : -1
  );

  console.table(oldest);
  return oldest[0];
};

const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return birth - death;
};

// Do not edit below this line
module.exports = findTheOldest;
