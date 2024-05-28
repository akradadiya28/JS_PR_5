/*
Write a simple JavaScript program to print expected Output using following array.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Red,Green,White,Black
Red+Green+White+Black
Red,Green,White
Red
Green,White
Red,Green,White,Black,orange 
 */

const myColor = ["Red", "Green", "White", "Black"];

console.log("My Array ", myColor);

//join 
const myColor2 = ["Red", "Green", "White", "Black"];

console.log(myColor2.join(","));
console.log(myColor2.join("+"));

// pop
const myColor3 = ["Red", "Green", "White", "Black"];

myColor3.pop();
console.log(myColor3.join(","));

// shift
const myColor4 = ["Red", "Green", "White", "Black"];
console.log(myColor4.shift());

// slice
const myColor5 = ["Red", "Green", "White", "Black"];
console.log(myColor5.slice(1, 3));

// push
const myColor6 = ["Red", "Green", "White", "Black"];

const colorPush = myColor6.push("Orange");
console.log(myColor6);

