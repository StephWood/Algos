/* Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array */

// input: array
// output: sorted array of three largest numbers

const threeLargest = (array) => {
  // use three variables for three largest nums
  let largestNum = -Infinity;
  let secondNum = -Infinity;
  let thirdNum = -Infinity;
  // iterate through array and check for relation to each variable, updating them as necessary
  array.forEach((num) => {
    if (num >= largestNum) {
      thirdNum = secondNum;
      secondNum = largestNum;
      largestNum = num;
    } else if (num >= secondNum) {
      thirdNum = secondNum;
      secondNum = num;
    } else if (num >= thirdNum) thirdNum = num;
  });
  // return array of final variables in order
  return [thirdNum, secondNum, largestNum];
};

const myArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

console.log(threeLargest(myArray));
