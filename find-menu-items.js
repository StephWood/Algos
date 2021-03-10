/*
create a function for finding an item in a list of menus. 
Input: string, array of objects
Output: null or menu item object 
Class Menus {
  name: string
  groups: array of objects
}
Class Menu Groups {
  name: string
  groups: array of Menu Group objects
  items: array of Menu Item objects
}
Class Menu Item {
  name: string
}

// all items are stored on a name property

 */
const myMenus = [
  {
    name: 'Breakfast',
    groups: [
      {
        name: 'Hot',
        groups: [
          {
            name: 'Sandwiches',
            items: [
              {
                name: 'Bacon, Egg, Cheese biscuit',
              },
              {
                name: 'Toasted Bagel',
              },
              {
                name: 'Croissant',
              },
            ],
          },
          {
            name: 'Platters',
            items: [
              {
                name: 'Pancakes and Sausage',
              },
              {
                name: 'Eggs and Sausage',
              },
              {
                name: 'Chicken and Waffles',
              },
            ],
          },
        ],
      },
      {
        name: 'Cold',
        items: [
          {
            name: 'Cereal with milk',
          },
          {
            name: 'Yogurt Parfait',
          },
        ],
      },
      {
        name: 'Beverages',
        items: [
          {
            name: 'Orange Juice',
          },
          {
            name: 'Coffee',
          },
          {
            name: 'Chai Latte',
          },
        ],
      },
    ],
  },
  {
    name: 'Lunch',
    items: [
      {
        name: "We don't serve Lunch.",
      },
    ],
  },
  {
    name: 'Dinner',
    items: [
      {
        name: "We don't serve Dinner.",
      },
    ],
  },
];

// approach: iterate through nested objects (recursion) and check if value stored at name key matches input string
const getItem = (str, menuArray) => {
  let foundItem = null;
  const findItem = (str, menuArray, foundItem) => {
    if (foundItem) return foundItem;
    console.log(foundItem);
    return menuArray.forEach(item => {
      for (let key in item) {
        if (item[key] === str) {
          foundItem = item;
          return foundItem;
        }
        console.log(foundItem);
        // for each item in the menu, if it is an object, check if it has a name property equal to input string
        // if it is an array, recursively call findItem
        if (Array.isArray(item[key])) findItem(str, item[key], foundItem);
      }
    });
  };
  findItem(str, menuArray, foundItem);
  return foundItem;
};

console.log(getItem('Lunch', myMenus));

/*
const checkName = (string, obj) => {
    for (let key in obj) {
      console.log(key);
      if (key.name === string) return key;
      if (Array.isArray(obj[key])) findItem(string, obj[key]);
    }
  };

  menuArray.forEach(item => {
    console.log(item);
    if (Array.isArray(item)) {
      findItem(str, item);
    } else {
      console.log(item.name)
      if (item.name === str) return item;
      else checkName(str, item);
    }
*/
