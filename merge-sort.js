/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.


input: array of integers
output: sorted array 
*/

arr = [5, 3, 1, 2, 4];

// break array into left and right halves
// keep middle value for index that separates into left and right
// merge function will compare left and right and merge them in the correct order

const mergeSort = (array) => {
  // merge helper function
  const mergeFunc = (leftArray, rightArray) => {
    // it will return an array so declare that
    const sortedArray = [];
    let leftIndex = 0,
      rightIndex = 0;

    // compare two arrays and push lesser into sorted array until we reach the end of either array
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        sortedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
    // concat the remaining elements onto sorted array
    return sortedArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  };

  // base case if array has only one element, don't sort and simply return
  if (array.length < 2) return array;
  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);
  return mergeFunc(mergeSort(leftArray), mergeSort(rightArray));
};

console.log(mergeSort(arr));
