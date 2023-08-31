const hobbies = ["Piano", "Movies", "Comedy"];
console.log(hobbies[0]);

const firstHobby = hobbies.shift();
const arrayLength = hobbies.length;
hobbies.push("Cooking");
console.log(hobbies[hobbies.length - 1]);
const allHobbies = hobbies.join(", ");
console.log(allHobbies);

const groceryItems = ["oats", "dates", "beans", "rice", "bread"];
console.log(groceryItems.join(" | "));
