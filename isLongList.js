const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);

bool1 = true

if (array.length >= 10){
    bool = true
    console.log("You're are a long sucker! Atleast 10 items longs!")
}
if (array.length < 10) {
console.log("Sorry, you're shorter than 10 items.")
}