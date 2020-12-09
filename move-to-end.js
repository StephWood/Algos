function moveElementToEnd(array, toMove) {
  const newArray = [];
  const dupes = [];
  // look for toMove and if found, slice out and push
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      dupes.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray.concat(dupes);
}

const myArray = [2, 1, 2, 2, 2, 3, 4, 2];

console.log(moveElementToEnd(myArray, 2));
