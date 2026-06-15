'use strict';

// bubble sort.
const sortByLength = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      if (array[j] < array[j + 1]) {
        let item = array[j];

        array[j] = array[j + 1];
        array[j + 1] = item
      }
    }
  }
  return array;
}
console.log(sortByLength([4,45,6]));