/* 
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.
  
  You can assume that there will only be one pair of numbers with the smallest
  difference. 

  Sample: 
  arrayOne = [-1, 5, 10, 20, 28, 3];
  arrayTwo = [26, 134, 135, 15, 17];

  output: [28, 26] 
  */

const smallestDif = (array1, array2) => {
  // create empty array to hold results
  const results = [];
  // create min variable
  let min = Infinity;
  // for each num in array 1, loop through array 2 checking difference between numbers
  array1.forEach((num) => {
    for (let i = 0; i < array2.length; i++) {
      // if their difference is less than min, update min and store those two numbers in results (swap current with new)
      let diff = Math.abs(array2[i] - num);
      if (diff < min) {
        min = diff;
        [results[0], results[1]] = [num, array2[i]];
      }
    }
  });
  // return results array
  return results;
};

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDif(arrayOne, arrayTwo));
