// given large array, return list of smaller arrays in chunks
const chunkArr = (array) => {
  const resultArr = [];
  const chunk = 2;
  while (array.length) {
    resultArr.push(array.splice(0, chunk));
  }
  return resultArr;
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(chunkArr(myArray));
