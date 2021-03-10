/*
given dollar amount (ex $3.18) determine how many nickels will be 
dispensed for change (no dollar bills used)
consider quarters and dimes, but only return nickels
*/

// questions - do we have to use quarters if change > $0.25 or can we return all dimes for tens?

const getNickels = num => {
  // if the amount is an even dollar amount, no nickels returned
  if (num % 1 === 0) return 0;
  // calculate change remaining
  let change = Math.round((num % 1) * 100);
  // if change is a multiple of quarters or
  if (change % 25 === 0 || change % 10 === 0) return 0;
  return 1;
};

console.log(getNickels(3.4));
