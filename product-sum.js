/* 
  Write a function that takes in a "special" array and returns its product sum.

  A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

  The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3. 

  Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z). */

const productSum = (array, depth = 1) => {
  // sum value variable
  let sum = 0;
  // sum function should just add elements together
  array.forEach((el) => {
    if (!Array.isArray(el)) {
      sum += el;
    } else {
      // if the element is itself an array, add 1 to depth and add sum of that special array to the total sum
      sum += productSum(el, depth + 1);
    }
  });
  // multiply sum of array by its depth
  return sum * depth;
};

const myArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(myArray));
