/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
const numbers = [1, 2, 3, 4, 5]

// for (const friend of friends) {
//   console.log(friend)
// }

// const logItems = function (items) {
//   for (const item of items)
//   console.log(item)
// }

// logItems(friends)
// logItems(numbers)

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
