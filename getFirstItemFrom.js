const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);

console.log("This is the first item in the array: " + array[0]);
