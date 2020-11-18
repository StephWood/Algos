/* Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
 */

function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  while (j >= i) {
    if (string[i++] === string[j--]) {
    } else return false;
  }
  return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('mamam'));
console.log(isPalindrome('spaghetti'));
