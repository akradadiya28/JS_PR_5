/*
write a JavaScript program given this output using replace concept.
Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"
*/

const str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
console.log(str);


// replaceAll in string
const newStr = str.replaceAll("dog", "cat");
console.log(newStr);
