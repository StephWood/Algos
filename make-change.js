const waysToMakeChange = (n, denoms) => {
  // create array of n elements
  const ways = new Array(n + 1).fill(0);
  // if n is 0, we have 1 way so set the value at index 0 to 1
  ways[0] = 1;
  // for each denom in denoms array
  for (let denom of denoms) {
    // incremement amount by 1 up to n
    for (let amount = 1; amount <= n; amount++) {
      // if the denom is less than or equal to the current amount
      if (denom <= amount) {
        // assign value at that index of ways to the current value + the count at that amount - denom index to account for ways to get the remainder needed for exact change
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
};

const myDenoms = [2, 3, 4, 7];
console.log(waysToMakeChange(7, myDenoms));
