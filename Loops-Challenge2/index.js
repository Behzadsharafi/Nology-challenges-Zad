// Challenge: Generating Unique Random Numbers
// MVP
// Using a while loop generate a list of 10 random unique numbers
// Each number must be between 0 and 15
// Tips
// You may need to google how to generate, you can use the Math.random() API

const uniqueRandomNumbers = [];
const min = 0;
const max = 15;

while (uniqueRandomNumbers.length < 10) {
  const randomNum = Math.floor(Math.random() * 16);

  if (!uniqueRandomNumbers.includes(randomNum)) {
    uniqueRandomNumbers.push(randomNum);
  }
}

console.log(uniqueRandomNumbers);

// Challenge: generateNumbers function
// MVP
// Create a function that returns a list of random whole numbers given a range
// Create a function called generateNumbers
// This function should take in 2 numbers
// n being the number of numbers to be generated
// r being the max range
// E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
// Function should return n numbers in range 0 <= n < r

function generateNumbers(n, r) {
  if (n <= 0 || r <= 0) {
    return [];
  }

  const randomNumbers = [];
  let count = 0;
  while (count < n) {
    const randomNumber = Math.floor(Math.random() * r);
    randomNumbers.push(randomNumber);
    count++;
  }
  return randomNumbers;
}

console.log(generateNumbers(5, 20));

// Bonus
// Add an argument to your function called isUnique
// If this is set to true, there should be no duplicate numbers in the output

function generateUniqueNumbers(n, r, isUnique = false) {
  if (n <= 0 || r <= 0) {
    return [];
  }

  const randomNumbers = [];
  let count = 0;

  if (isUnique && n > r) {
    console.log(
      "Warning: Cannot generate unique numbers when n > r. Generating non-unique numbers instead."
    );
    isUnique = false;
  }

  if (isUnique) {
    const allPossibleNumbers = Array.from({ length: r }, (_, index) => index);
    while (count < n) {
      const randomIndex = Math.floor(Math.random() * allPossibleNumbers.length);
      randomNumbers.push(allPossibleNumbers.splice(randomIndex, 1)[0]);
      count++;
    }
  } else {
    while (count < n) {
      const randomNumber = Math.floor(Math.random() * r);
      randomNumbers.push(randomNumber);
      count++;
    }
  }

  return randomNumbers;
}
