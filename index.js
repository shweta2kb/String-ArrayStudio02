let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

const searchComma=',';
const searchSemicolon=';';
const searchTrim=' ';
console.log(`The word "${searchComma}" ${protoArray1.includes(searchComma) ? 'is' : 'is not'} in the sentence`);

console.log(`The word "${searchSemicolon}" ${protoArray2.includes(searchSemicolon) ? 'is' : 'is not'} in the sentence`);

console.log(`The word "${searchTrim}" ${protoArray3.includes(searchTrim) ? 'is' : 'is not'} in the sentence`);

console.log(`The word "${searchTrim}" ${protoArray4.includes(searchTrim) ? 'is' : 'is not'} in the sentence`);

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
let newString =''; 
console.log(strings);
console.log(strings.reverse());
newString = strings.join(",")
console.log(newString);
//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
console.log(strings.sort());
newString = strings.join(",")
console.log(newString);
//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
console.log(strings.reverse());
newString = strings.join(",").trim();
console.log(newString);
//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
