/*
Write a JavaScript program for remove negative values using the filter array function.
numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
*/

const array = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
console.log(array);

const negativeFilter = array.filter(number => number >= 0);
console.log(negativeFilter);