/*
write a JavaScript program to  to print expected output for following string.
x = "airplane";             output:-  r
x = "oxoxoxox";             output:- "oXoXoXoX"
x = "A New Java Book";      output:-   "a new java book" , "A NEW JAVA BOOK"
*/

const str = "A New Java Book";

// lowercase
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);

// uppercase
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

const word = "airplane";
console.log(word);

// characterAt in String
console.log(word.charAt(2));

const alternate = (str1) => {
    for (let i = 0; i < str1.length; i++) {
        alternateCase += (i % 2 === 0) ? str1[i].toLowerCase() : str1[i].toUpperCase();
    }
    return alternate;
}
const str1 = "oxoxoxox";
const alternateCase = "";

console.log(str1);

console.log(alternateCase);



