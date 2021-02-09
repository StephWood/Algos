function anagrams(word, words) {
  // sort characters in word to match
  word = word.split('').sort().join('');
  // filter array to return only those that when sorted match word
  return words.filter((str) => {
    return word === str.split('').sort().join('');
  });
}

const anagrams2 = (word, words) => {
  // declare output array
  const anagrams = [];
  // sort word to match
  word = word.split('').sort().join('');
  // iterate through words to check
  for (let str of words) {
    // sort each one and check for equality, pushing to output if match
    let anagram = str.split('').sort().join('');
    anagram === word ? anagrams.push(str) : false;
  }
  // return output array
  return anagrams;
};

console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams2('laser', ['lazing', 'lazy', 'lacer']));
console.log(anagrams2('abba', ['aabb', 'acbd', 'baab']));

for (let i = 0; i < 12; i++) {}
