// class of item with subitems and a quantity for each
const items = {
  quantity: 5,
  subitems: {
    quantity: 3,
    sub2: {
      quantity: 4,
    },
  },
};

// function that will calculate total number of items
// in each level the value stored at the quantity key

const getQuantity = (obj) => {
  let counter = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      counter += getQuantity(obj[key]);
    } else counter += obj.quantity;
  }
  return counter;
};

console.log(getQuantity(items));
