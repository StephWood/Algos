// Write a function that can sum two numbers and that must be used like this:
// sumTwoNumbers(3)(5);

// create an inner function to add the inner and outer number arguments together
const sumTwoNumbers = (num1) => {
  return function (num2) {
    return num1 + num2;
  };
};

// test
// console.log(sumTwoNumbers(3)(5));

/*
Consider the string 'AAAABCCCCCDDDD' consisting of alphabetical characters only.
Since the string consists of alphabetical characters only, duplicate characters can be removed and replaced with a duplication factor n.
With this technique the string can be compressed and represented by `4AB5C4D`.

Hence you can have a compressed string that reads as '3A12BC' and that expands to 'AAABBBBBBBBBBBBC'.

Write a function, which takes a string in compressed form and recreates the original uncompressed string.
Note: the duplication factor is not restricted to one digit.

Example strings to test:
2A2B => AABB
2AC4B => AACBBBB
3A12BC => AAABBBBBBBBBBBBC
4AB5C4D => AAAABCCCCCDDDD */

// input: compressed string
// output: original string of letters only

const buildString = (string) => {
  // check edge case if argument is not a string
  if (typeof string !== 'string') return 'Please enter a string';
  // declare variable empty string for the result
  let result = '';
  // loop through input string, grab any numbers and store the factor number as a variable
  for (let i = 0; i < string.length; i++) {
    let factor;
    // if there is a number (not NaN), concatenate consecutive digits as string and convert to number
    if (!isNaN(string[i])) {
      factor = '';
      while (!isNaN(string[i])) {
        factor += string[i];
        i++;
      }
      factor = parseInt(factor);
    } // if the character is a letter (NaN) then factor is simply 1
    else factor = 1;
    // concatenate factor number of current letter character to result string
    while (factor--) {
      result += string[i];
    }
  }
  // return uncompressed string
  return result;
};

// test
// console.log(buildString('4A2C6B'));
// console.log(buildString('3A12BC'));
// console.log(buildString(5));
