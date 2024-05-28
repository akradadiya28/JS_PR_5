/*
Write a JavaScript program which filters out any string which is less than 8 characters. 
words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
*/

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
console.log(words);

// filter method
const characters = words.filter((word) => word.length < 8);
console.log(characters);