// Create a switch block that will log a string for each day of the week.

// let day = 5;

// switch (day) {
//   case 1:
//     console.log(`Today is Monday`);
//     break;
//   case 2:
//     console.log(`Today is Tuesday`);
//     break;
//   case 3:
//     console.log(`Today is Wednesday`);
//     break;
//   case 4:
//     console.log(`Today is Thursday`);
//     break;
//   case 5:
//     console.log(`Today is Friday`);
//     break;
//   case 6:
//     console.log(`Today is Saturday`);
//     break;
//   case 7:
//     console.log(`Today is Sunday`);
//     break;
//   default:
//     console.log("Please enter a number between 1 and 7");
// }

// Tell the user what eye colour their child would have.

// Define the eye color probabilities

// 1-brown and brown will be 75% brown 18.75% green 6.25% blue;
// 2-green and brown will be 50% brown 37.5% green 12.5% blue
// 3-blue and brown will be 50% brown 0% green 50% blue
// 4- green and green will be less than 1% brown 75% green 25% blue
// 5-green and blue will be 0% brown 50% green 50% blue
// 6-blue and blue will be 0% brown 1% green 99% blue

// Define the parent eye colors (replace these with actual colors)

const parent1 = "brown";
const parent2 = "brown";

let message, brownChance, greenChance, blueChance;

switch (`${parent1}-${parent2}`) {
  case "brown-brown":
    brownChance = 75;
    greenChance = 18.75;
    blueChance = 6.25;
    break;
  case "green-brown":
    brownChance = 50;
    greenChance = 37.5;
    blueChance = 12.5;
    break;
  case "blue-brown":
    brownChance = 50;
    greenChance = 0;
    blueChance = 50;
    break;
  case "green-green":
    brownChance = 0.01; // Less than 1%
    greenChance = 75;
    blueChance = 25;
    break;
  case "green-blue":
    brownChance = 0;
    greenChance = 50;
    blueChance = 50;
    break;
  case "blue-blue":
    brownChance = 0;
    greenChance = 1;
    blueChance = 99;
    break;
  default:
    message = "Not Enough Info";
}

if (message === undefined) {
  console.log(
    `The chances of your child having brown eyes is ${brownChance}%, green is ${greenChance}%, and blue is ${blueChance}%`
  );
} else {
  console.log(message);
}
