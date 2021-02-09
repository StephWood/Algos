const classPhotos = (redShirtHeights, blueShirtHeights) => {
  // sort both arrays
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let backRow;
  let frontRow;
  // assign backRow to array with greater element at index 0
  if (redShirtHeights[0] > blueShirtHeights[0]) {
    backRow = redShirtHeights;
    frontRow = blueShirtHeights;
  } else {
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  }
  // for each index, check if backRow is greater than frontRow
  for (let i = 0; i < backRow.length; i++) {
    // if no, return false
    if (backRow[i] <= frontRow[i]) return false;
  }
  // if we make it through loop return true
  return true;
};

const redShirts = [7, 11, 3, 5, 6];
const blueShirts = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirts, blueShirts));
