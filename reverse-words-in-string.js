function reverseWordsInString(string) {
  const reversedString = [];

  for (let i = 0; i < string.length; i++) {
    let currString = '';
    if (string[i] === ' ') {
      reversedString.unshift(currString);
      currString = '';
    } else currString + string[i];
  }
  return reversedString.join(' ');
}
