function reverseWordsInString(string) {
  const reversedString = [];
  let currString = '';

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ' ' || i === string.length) {
      reversedString.unshift(currString);
      currString = '';
    } else currString += string[i];
  }
  return reversedString.join(' ');
}

console.log(reverseWordsInString('Job hunting is the worst'));
console.log(reverseWordsInString('I like cookies'));
console.log(reverseWordsInString('Reverse these words'));
console.log(reverseWordsInString('I am not a cat'));
