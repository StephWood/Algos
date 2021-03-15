/* 
  Write a function that takes in a non-empty array of integers and returns the
  maximum sum that can be obtained by summing up all of the integers in a
  non-empty subarray of the input array. A subarray must only contain adjacent
  numbers (numbers next to each other in the input array).

 */
const kadanesAlgorithm = array => {
  let maxSum = -Infinity;
  let currSum = 0;

  array.forEach(num => {
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(currSum, maxSum);
  });

  return maxSum;
};

const arrayTest = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
const negArray = [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5];

console.log(kadanesAlgorithm(arrayTest));
