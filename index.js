let letters = ["a", "b", "c"];

// function printAllPossibleOrderedPairs(items) {
//   items.forEach((firstItem) => {
//     console.log("I come first", firstItem);
//     items.forEach((secondItem) => {
//       console.log(firstItem, secondItem);
//     });
//   });
// }

// printAllPossibleOrderedPairs(letters);

// function sayHiNTimes(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// sayHiNTimes(2);

const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
