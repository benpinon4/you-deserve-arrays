const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);

console.log("This is the last item in the array: " + array[array.length-1]);