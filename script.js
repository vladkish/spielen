"use strict";

const sortMain = function(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length-1; j++) {
      if (list[j] > list[j + 1]) {
        let item = list[j];

        list[j] = list[j + 1];
        list[j + 1] = item;
      }
    }
  }
  return list;
};

function flattenAndSort(array) {
  const total = [];

  array.forEach((item) => {
    total.push(...item);
  });

  return sortMain(total);
}
console.log(flattenAndSort([[1,3,5],[100],[2,4,6]]));