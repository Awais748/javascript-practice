// let arr = [1, 2, 3, 4, 5, 7, 8];
// let result = arr.map((e) => {
//   return e * null;
// });

// const { object } = require("prop-types");

// console.log(result);

// let result = arr.map((e) => {
//   return e % 2 === 0;
// });

// console.log(result);

// arr.forEach((e) => {
//   console.log( e * 2);
// });

// let sum = arr.reduce((acc, curr) => {
//   return acc * curr;
// });

// console.log(sum);

// let nums = [10, 20, 30, 40];

// let res = nums.find((x) => {
//   return x;
// });

// console.log(res);

// let arr = [2, 4, 5, 6, 7, "", 8, 4, 2];
// let result = arr.splice(1, 4, 89);
// console.log(arr);

// let arr = [1, 2, 3, 4];

// let res = arr.map(x => {
//   if (x % 2 === 0) return x * 2;
// });

// console.log(res);

// let arr = [1, 2, 3];
// let result = [];

// arr.forEach((e) => {
//   result.push(e * 2);
// });

// console.log(result);

// console.log(typeof null);

// function doSomething() {
//   console.log(this);
// }
// doSomething();

// console.log(!"");
// console.log(!!"hellow");

// let a = 1;
// let b = a++;
// console.log(a, b);

// let obj = { a: 1 };
// let arr = [obj];
// arr[0].a = 99;
// console.log(obj);

// let input = [0, 1, 0, 3, 12];

// result = input.filter((x) => x !== 0).concat(input.filter((x) => x === 0));
// let result = [];
// let zeroResult = [];
// for (let i of input) {
//   if (i !== 0) {
//     result.push(i);
//   } else {
//     zeroResult.push(i);
//   }
// }
// console.log(result.concat(zeroResult));

// output = [1,3,12,0,0]

// input = "aabbccdd";
// // result = input[6];

// let seen = new Set();
// for (let i of input) {
//   if (seen.has(i)) {
//     result = i;
//   }
//   seen.add(i);
// }

// console.log(result);

// output : d

// let text = "I love javascript";
// let result = text.split(" ").reverse().join("");
// console.log(result);
// let input = [1, 2, 3, 4, 5];
// let output = [];

// for (let i = 0; i < input.length; i += 2) {
//   output.push([input[i], input[i + 1]].filter(Boolean));
// }

// console.log(output);

// string = "hello world";
// let reserved = "";
// for (let i of string) {
//   reserved = i + reserved;
// }

// console.log(reserved);

// const input = [1, 2, 2, 3, 3, 3, 4];
// let obj = {};

// for (let i of input) {
//   if (obj[i]) {
//     obj[i] = obj[i] + 1;
//   } else {
//     obj[i] = 1;
//   }
// }

// let maxCount = 0;
// let answer = null;

// for (let key in obj) {
//   if (obj[key] > maxCount) {
//     maxCount = obj[key];
//     answer = key;
//   }
// }

// console.log(answer); // "3"

// const input = "racecar";
// let result = input.split("").reverse().join("");
// if (input === result) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

// input = [1, 2, 3, 4, 5];
// result = null;
// for (let i of input) {
//   result += i;
// }
// console.log(result);

// input = [1, 2, 3, 4];
// let result = input.map((x) => x * x);
// console.log(result);

// let arr = [5, 12, 3, 18, 7, 25];
// let result = arr.filter((x) => x >= 10);
// console.log(result);

// let arr = [1, 2, 3, 4];
// let result = arr.reduce((acc, curr) => acc * curr);
// console.log(result);

// input = [1, 3, 4, 6, 7];
// result = input.find((x) => x % 2 == 0);
// console.log(result);

// input = [1, 2, 3];
// // result = input.some((x) => x < 0);
// result = input.every((x) => x > 0);
// console.log(result);

// let input = [10, 20, 30, 40, 50];
// let result = input.slice(1, 4);
// console.log(result);

// let input = { name: "Ali", age: 20, city: "Lahore" };

// let result = Object.keys(input);
// let result2 = Object.values(input);
// console.log(result);
// console.log(result2);

input = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 16 },
  { name: "Ahmed", age: 25 },
];
// for (let i of input) {
//   if (i[age] >= 20) {
//     console.log(i);
//   }
// }
let result = input
  .filter((person) => person.age >= 18)
  .map((v) => v.name.toUpperCase());
console.log(result);
