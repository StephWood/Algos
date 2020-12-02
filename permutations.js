/* Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array. */

function getPermutations(array) {
  // if input array is empty, return empty array
  // if (array.length === 0) return array;
  // declare result array to hold all permutation arrays
  const result = [];
  permHelper(0, array, result);
  // return result array
  return result;
}

// for each element of array, set that element as the first in the new array, and temporarily remove it from the array
// recursively push each element into new array and remove accordingly until array is empty, at which point push the new array into result array
function permHelper(i, array, results) {
  // if we have reached end of array, push it into results
  if (i === array.length - 1) {
    results.push(array.slice());
  }
  // else
  else {
    // iterate through following elements in array, swapping them as we go
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permHelper(i + 1, array, results);
      swap(i, j, array);
    }
  }
}

// swapping function
function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const myArray = [1, 2, 3];
console.log(getPermutations(myArray));
