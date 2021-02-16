/*
Input: one object that contains key/value pairs that represent plane tickets, where the key is the starting point and value is the destination.
-One key will never be a value and will be the ultimate starting point
-One value will never be a key and is the final destination
-Assume each city will only appear as a key and a value once 
Output: Any structure that displays the one way route that accurately connects all the flights from starting point to the final destination.
*/

const tickets = {
  Christchurch: 'Charlotte',
  'Los Angeles': 'Tokyo',
  Charlotte: 'St. Louis',
  Tokyo: 'Singapore',
  'St. Louis': 'Detroit',
  'New York': 'Salt Lake City',
  Seattle: 'New York',
  'Salt Lake City': 'Christchurch',
  Singapore: 'Los Angeles',
};

const getRoute = obj => {
  //create array to store route
  const route = [];
  // create Set from values
  const valueSet = new Set();
  for (let key in obj) {
    valueSet.add(obj[key]);
  }

  // iterate through object values and for key that is missing, assign that to index 0
  for (let key in obj) {
    if (!valueSet.has(key)) {
      route.push(key);
    }
  }

  // iterate through object using array element as key to search for, and push it's value into array
  for (let i = 0; i < valueSet.size; i++) {
    let city = route[i];
    route.push(obj[city]);
    // if we hit end of route early, return route
    if (!obj.hasOwnProperty(obj[city])) return route;
  }
  // return array
  return route;
};

console.log(getRoute(tickets));
