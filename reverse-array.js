/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = (array) => {
  // set pointers for indices to swap
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
};

const myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(myArray));
/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseString = (string) => {
  const array = string.split(' ');
  reverseArray(array);
  return array.join(' ');
};

const sentence = 'bob likes dogs alot';
console.log(reverseString(sentence));
