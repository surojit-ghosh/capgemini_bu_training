console.log("--- 1. Array Reversal ---");

let originalArr = ["University", "of", "Engineering", "and", "Management", "Kolkata"];
let reversedArr = originalArr.reverse(); 
console.log(reversedArr);


console.log("\n--- 2. While Loop Iteration ---");
let loopArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let left = 0;
let right = loopArr.length - 1;

while (left <= right) {
    console.log(loopArr[left]);
    left++;
}


console.log("\n--- 3. Array Flattening ---");

const nestedNums = [1, 2, 3, [4, 5, 6], [[7, 8], 9], 10];
const flatNums = nestedNums.flat(Infinity);
console.log(flatNums);

const nestedChars = ['a', 'b', ['c', 'd', ['e', 'f'], 'g'], 'h'];
const flatChars = nestedChars.flat(Infinity);
console.log(flatChars);
