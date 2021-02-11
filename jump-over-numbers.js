/* 
You are given a list of non-negative integers and you start at the left-most integer in this list. After that you need to perform the following step:

Given that the number at the position where you are now is P you need to jump P positions to the right in the list. For example, if you are at position 6 and the number at position 6 has the value 3, you need to jump to position 6 + 3 = 9. Repeat this operation until you reach beyond the right-side border of the list.

Your program must return the number of jumps that it needs to perform following this logic. Note that the list may contain the number 0, which mean that you can get stuck at a this position forever. In such cases you must return the number -1.

The length N of the input list will be in the range [1, 1000].

Sample Input: [3, 4, 1, 2, 5, 6, 9, 0, 1, 2, 3, 1]
Sample Output: 4

*/

const numberJump = (array) => {
  // determine index at which our jumps end
  const end = array.length;
  // keep count of jumps
  // recursive helper function to repeat process
  const jumpAround = (array, i = 0, count = 0) => {
    // if value at index is 0, return -1
    if (array[i] === 0) return -1;
    // if next index is greater than or equal to end, return count
    if (i >= end) return count;
    // if next index is less than end, increment count
    // add current index to value at index to find next position
    return jumpAround(array, i + array[i], count + 1);
  };
  return jumpAround(array);
};

const sample = [3, 4, 1, 3, 5, 0, 2, 0, 1, 2, 3, 1];

console.log(numberJump(sample));
