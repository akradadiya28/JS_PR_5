// write a JavaScript program for check value is found or not?

const fruits = ["Banana", "Apple", "Orange"];
const valueChecked = "Apple";

// include method in Array
if (fruits.includes(valueChecked)) {
    console.log(`The Value is ${valueChecked} found in this Array.`);
} else {
    console.log(`The Value is ${valueChecked} not found in this Array.`);
}