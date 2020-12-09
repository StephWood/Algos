/* 
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

  Note that you're expected to solve this problem without using division.
  */

const myArray = [5, 1, 4, 2];

// O(n^2) time complexity, O(n) space complexity
const arrayOfProducts = (array) => {
  // for each num of array, loop through rest of nums multiplying them together and getting product
  return array.map((num) => {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
      if (i === array.indexOf(num)) continue;
      else result *= array[i];
    }
    return result;
  });
};

console.log(arrayOfProducts(myArray));
