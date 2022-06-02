const prompt = require("prompt-sync")({ sigint: true });

let array = JSON.parse(prompt("Please enter an array: "));

console.log(array);

bool1 = true;

if (typeof array[0] === "number") {
  bool1 = true;
  console.log("Congrats" + array[0] + "is the first item in the array and is a number!"
  );
} else {
  bool1 = false;
  console.log("The first item in the array is not a number.");
}
