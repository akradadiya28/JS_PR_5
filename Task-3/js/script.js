// Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let findMaxMin = (array) => {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i > max]) {
            max = array[i];
        }
        if (array[i < min]) {
            min = array[i];
        }
        return [max, min];
    }
}

const array = [1, 3, 55, 35, 3, 32, 2, 293, 293];
let result = findMaxMin(array);

console.log(`Maximum value is ${result[0]}`);
console.log(`Minimum value is ${result[1]}`);