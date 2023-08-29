// Challenge: Odds & Evens
let n = 7;

if (typeof n === "number") {
  if (!(n % 2)) console.log("n is even");
  else console.log("n is odd");
} else console.log("Invalid n");

// Challenge: Comparing Numbers

let x = 2;
let y = 5;
if (x > y) console.log("x is greater thay y");
if (x < y) console.log("x is smaller thay y");
else console.log("x is equal to y");

let userInput = true;
if (typeof userInput === "number") {
  console.log(userInput * userInput);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("Invalid input");
}

let fruit = "orange";

switch (fruit) {
  case "apple":
    console.log("Make an apple pie");
    break;
  case "banana":
    console.log("Make banana bread");
    break;
  case "orange":
  case "grapefruit":
    console.log("Make some juice");
  default:
    console.log("I don't know what to make");
}
