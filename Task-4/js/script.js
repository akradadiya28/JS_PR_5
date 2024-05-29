// Write a JavaScript program for convert all array element in ASCII value.

const convertToAscii = (array) => {
    const asciiValue = [];

    for (let i = 0; i < array.length; i++) {
        asciiValue.push(array[i].charCodeAt(0)); //convert to ascii value using charcodeat and push method
    }
    return asciiValue;
}
const array = ["A", "r", "p", "i", "t"];
console.log(array);

const ascii = convertToAscii(array);
console.log(ascii);




