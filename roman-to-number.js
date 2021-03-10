const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToNumber = str => {
  // variable to hold result
  let resultNum = 0;
  // look at each character of string and add numerical value to result
  for (let i = 0; i < str.length; i++) {
    resultNum += romanValues[str[i]];
  }
  // return result
  return resultNum;
};

module.exports = romanToNumber;
