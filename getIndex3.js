const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);


if (array.length >= 4) {
console.log("This is the item in the 3rd index of the array: " + array[3]);
}
if (array.length < 4) {
console.log("This is the item in the last index of the array: " + array[array.length-1])    
}