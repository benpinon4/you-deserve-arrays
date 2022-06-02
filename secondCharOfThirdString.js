const prompt = require("prompt-sync")({ sigint: true });

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);

bool1 = true;

if (typeof array[2] === "string") {
  // bool1 = false
  console.log("the second character in item 3 is: " + array[3][1]);
}
if (typeof array[2] !== "string") {
  // bool1 = true
  console.log("error");
}

