// const myFilter = (arr, func) => {
//   const filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const shouldKeep = func(element);
//     if (shouldKeep) {
//       filteredArray.push(element);
//     }
//   }
//   return filteredArray;
// };

// const myJoin = (arr, separator = ",") => {
//   if (!Array.isArray(arr)) {
//     throw new Error("Input is not an array.");
//   }

//   let joined = "";
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     joined += element + separator;
//   }
//   return joined.substring(0, joined.length - 1);
// };

// console.log(myJoin(["Thomas", "Emma", "Tony"]));

// const myReverse = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const element = arr[i];
//     reversed.push(element);
//   }
//   return reversed;
// };

// console.log(myReverse(["Thomas", "Emma", "Tony"]));

// const myFindIndex = (arr, func) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (func(element)) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(myFindIndex([5, 6, 3, 2], (x) => x > 5));

const myReduce = (arr, reducer, initialValue) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  }

  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

const myArray = [1, 2, 3, 4, 5];

// Using myReduce to calculate the sum of array elements
const sum = myReduce(myArray, (acc, current) => acc + current, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
