/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.
*/

const sortedSquaredArray = array =>
  array.map(num => num * num).sort((a, b) => a - b);

const numbers = [1, 2, 3, 5, 6, 8, 9];
const nums = [-2, -1];

console.log(sortedSquaredArray(numbers));
console.log(sortedSquaredArray(nums));
