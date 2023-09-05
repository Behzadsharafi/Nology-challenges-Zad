const myFilter = (arr, callback) => {
  filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const filtered = myFilter([1, 2, 3, 4], (x) => x > 2);

console.log(filtered);
