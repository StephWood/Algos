/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

*/

const arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

// function with unknown number of arrays as input
const commonElements = (...args) => {
  // check if args has enough arrays to compare
  if (args.length < 2) return 'Nothing in Common!';
  // create set that includes all of first array elements
  let commonSet = new Set(args[0]);
  // starting with second array in args, check if each element is in commonSet
  // if it is, add it to a newCommonSet
  for (let i = 1; i < args.length; i++) {
    const newCommonSet = new Set();
    for (let element of args[i]) {
      if (commonSet.has(element)) newCommonSet.add(element);
    }
    // update commonSet to newCommonSet after each array of args is iterated through
    commonSet = newCommonSet;
  }
  // if set has elements, spread them into array or return "Nothing in Common!"
  return commonSet.size ? [...commonSet] : 'Nothing in Common!';
};

console.log(commonElements(arr1, arr2, arr3));
