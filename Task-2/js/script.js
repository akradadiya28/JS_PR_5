// Write a JavaScript program to get sum of all array element using for loop and foreach loop.

const array = [1, 2, 3, 4, 5];
let sum = 0;

// for loop
for (i = 0; i <= array.length - 1; i++) {
    console.log(`Array is ${array[i]}`);
    sum = sum + array[i];
}
console.log(`Sum of Array is = ${sum}`);

// forEach
const followers = [12, 22, 32, 43, 45];
console.log(`Followers is ${followers}`);
let add = 0;

followers.forEach(element => {
    add += element;
});
console.log(`Sum of Followers is = ${add}`);
