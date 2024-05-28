/*
write a JavaScript program convert string to array.
Input :- "Hire the top 1% freelance developers";

Output :- ["Hire", "the", "top", "1%"] 
*/

const sentance = "Hire the top 1% freelance developers";
console.log(sentance);

// split in string
const array = sentance.split(" ");
console.log(array);

// slice in array
const newStr = array.slice(0, 4);
console.log(newStr);

