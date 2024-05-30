/*
Write a JavaScript program for sort array in ascending descending.
numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
myColor = ["Red", "Green", "White", "Black"];
 */

const numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
console.log(numbers);

// ascending
numbers.sort((a, b) => a - b);
console.log(numbers);

// descending
numbers.sort((a, b) => b - a)
console.log(numbers);

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor);

// ascending
myColor.sort();
console.log(myColor);

// descending
console.log(myColor.slice().reverse());

