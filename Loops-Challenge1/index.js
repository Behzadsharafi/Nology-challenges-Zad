// Create a function with a for loop that will add all the numbers up to n

// function sum(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }

// //  Using the math formula

// function sum2(n) {
//   const sum = (n * (n + 1)) / 2;
//   return sum;
// }

// Create a function with a for loop that will add numbers to your shopping list

// const shoppingList = [
//   "milk",
//   "watermelon",
//   "eggs",
//   "soap",
//   "butter",
//   "apples",
//   "ice-cream",
// ];

// function printShoppingList(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1 + "." + array[i]);
//   }
// }

// printShoppingList(shoppingList);

// Challenge: Capitalizing Odd Positioned Letters

// const str = "harrypotter";
// function capitalizeOdds(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     let modifiedChar = i % 2 ? string[i].toUpperCase() : string[i];
//     newString += modifiedChar;
//   }
//   return newString;
// }

// console.log(capitalizeOdds(str));

//Bonus

// const str2 = "zzzz";
// function incrementLetter(string) {
//   let newString = "";

//   for (let i = 0; i < string.length; i++) {
//     let modifiedChar;

//     if (string[i] === "z") {
//       modifiedChar = "a";
//     } else if (i % 2 === 0) {
//       modifiedChar = String.fromCharCode(string[i].charCodeAt(0) + 1);
//     } else {
//       modifiedChar = string[i];
//     }

//     newString += modifiedChar;
//   }

//   return newString;
// }

// console.log(incrementLetter(str2));

//Challenge: Removing Vowels

let str3 = "Sydney";

let newString = "";

for (let i = 0; i < str3.length; i++) {
  let char = str3[i];
  if (!"aeiouAEIOU".includes(char)) {
    newString += char;
  }
}

console.log(newString);

//Bonus

let str4 = "rachel";

let newString2 = "";

for (let i = 0; i < str4.length; i++) {
  let char = str4[i];
  if ("aeiouAEIOU".includes(char)) {
    if (i + 1 < str4.length && "lmrLMR".includes(str4[i + 1])) {
      newString2 += char;
    }
  } else {
    newString2 += char;
  }
}

console.log(newString2);
