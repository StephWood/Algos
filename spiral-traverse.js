function spiralTraverse(array) {
  const result = [];
  // invoke recursive func with array, starting row, end row, starting column, end column, and result array
  spiral(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}

// recursively do the following:
const spiral = (array, startRow, endRow, startCol, endCol, result) => {
  // base case when either start row or column passes end
  if (startRow > endRow || startCol > endCol) return;

  // push each element (column) in first row into results -- move across top
  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }

  // push element in last column of each row (after first row) into results -- move down left
  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }

  // push each element (except last) from endRow into results array
  for (let col = endCol - 1; col >= startCol; col--) {
    // edge case if there is only single row remaining don't double count it and break out of loop
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }

  // push each element in startCol (minus endRow) into results array
  for (let row = endRow - 1; row >= startRow + 1; row--) {
    // edge case if there is only single column left don't double count and break out of loop
    if (startCol === endCol) break;
    result.push(array[row][startCol]);
  }

  // invoke spiral with new rows and columns
  spiral(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
};

const spiralArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

console.log(spiralTraverse(spiralArray));
