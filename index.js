// function add() {
//   var a = 100;

//   function test() {
//    a = 10;
//  }
//  test();
//  console.log(a);
// }

// add();

// const a = 20;
// function check() {
//   const a = 10;
//   console.log(a);
//   function inner() {
//     const a = 5;
//     console.log(a);
//   }
//   inner();
// }
// console.log(a);
// check();

// let b = 10;
// function outer() {
//     let b = 20;
//     console.log(b);
//     function inner(){
//         let b = 40;
//         console.log(b)
//     }
//     inner()
// }
// console.log(b)
// outer();

// var a = 10;
// function outer() {
//   var b = 20;
//   console.log(b);
//   console.log(a);
//   function inner() {
//       var c = 30;
//       console.log(c);
//       b = 30;
//   }
//   inner();
//   console.log(b);
// }
// outer();

// let a = 10;
// function outer() {
//  let b = 15;
//   a = 55;
//   console.log(a);
//   b = 60
//   console.log(b);
//   function inner() {
//     let c = 20;
//     c = 10000
//     console.log(c);
//     c = 2

//     b = 75
// }
// console.log(c)
// b = 80
// inner();

//   console.log(b);
// }
// outer();

// var a = 10;
// a = 70;

// function outer() {
//   var a = 20;
//   console.log(a);
//   var a = 50;
//   function inner() {
//     var a = 30;
//     a = 40;
//     console.log(a);
//   }
//   console.log(a);
//   inner();
//   console.log(a);
// }
// console.log(a);
// outer();

// function nest() {
//   let b = 20;
//   console.log(b);
//   function inner() {
//     var a = 30;
//     console.log(a);
//     b = 39;
//   }
//   b = 2;
//   inner();
//   console.log(b);
// }
// nest();

// function amb() {
//   var a = 10;
// }
// console.log(a);

// for (var i = 2; i <= 10; i++) {
//   console.log(i);
// }

// var i = 1;
// while (i <= 10) {
//     let a = i++
//     console.log(a)
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;

// // }
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// // }
// let i = 1;

// do {
//   console.log(i);
//   let a = i++;
//   console.log(a);
// } while (i <= 20);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// // }

// var a = 20;
// var b = 30;

// function greet(a, b) {
//   console.log(a + b);
// }
// greet(20, 50);

// 1 km = 0.621371 miles

// let km = 150;
// let miles = km * 0.621371;
// console.log(miles);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = arr.reduce((acc, curr) => acc + curr);
// console.log(sum);

// const arr = ["Awais", "hammad", "Rahim", "Ahmer"];
// const res =  arr.reverse()

// console.log(arr);

// let arr = [1, 2, 3, -4, -5, -6, -7, -8, -9];
// const fil = arr.filter((f) => f < 0);
// console.log(fil.reverse());

// const arr = [1, 2, 3, 4, 5, 5, 77, 788];
// console.log(Math.max(arr));

// let a = 10;
// function greet() {
//   let a = 5;
//   console.log(a);
//   function inner() {
//     let a = 25;
//     console.log(a);
//   }
//   console.log(a);
//   inner();
// }

// greet();

// function discount(orginalPrice, discountPrice) {
//   return orginalPrice - (orginalPrice * discountPrice) / 100;
// }
// let orginalPrice = 300;
// let discountPrice = 40;

// let discountedPrice = discount(orginalPrice, discountPrice);

// console.log(
//   `orginalPrice is: ${orginalPrice} discountPrice is:  ${discountedPrice}`
// );

// function ageChecker() {
//   let verifiedAge = 18;

//   for (let age = 0; age <= 100; age++) {
//     console.log(age);
//     if (age >= verifiedAge) {
//       console.log("You are eligible");
//     } else {
//       console.log("You are under 18");
//     }
//   }
// }

// ageChecker();

// function tempconverter() {
//   for (let cel = 0; cel <= 100; cel++) {
//     let fah = (cel * 9) / 5 + 32;
//     console.log(`celsius is: ${cel} fahrenheit =>  ${fah}`);
//   }
// }
// tempconverter();

// function areaOfCircle() {
//   for (let radius = 0; radius <= 40; radius++) {
//     let circle = Math.PI * radius * radius;
//     console.log(`The area of circle is: ${circle}`);
//   }
// }
// areaOfCircle();

// function randomTextGenerator() {
//   let message = [
//     "Hope you're having a great day!",

//     "Just checking in—what’s up?",

//     "Something good is coming your way ✨",

//     "Don't forget to smile today 😊",
//     "Hard work pays off!",
//     "Believe in yourself, always 💪",
//     "Focus on progress, not perfection.",
//     "Sending good vibes your way ✨",
//     "You got this!",
//     "Keep going, success is near.",
//     "Battery low, motivation lower 😂",
//     "I love sleep. It's like free time travel.",
//     "Why is Monday allowed to exist?",
//     "My brain is buffering 🧠💭",
//     "If laziness was a degree, I'd be a PhD holder.",
//   ];

//   let randomIndex = Math.floor(Math.random() * message.length);
//   return message[randomIndex];
// }

// setInterval(function () {
//   let randomMessage = randomTextGenerator();
//   console.log("message is: " + randomMessage);
// },1000);

// let a = 10;
// function greet() {
//     let a = 5;
// }
// console.log(a);

// greet();

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   inner();
// // }

// (function () {
//   setTimeout(console.log("This is a IFFE"));
// // })();
// function splitBill(totalBill, numberOfFriends) {
//   totalBill = 100;
//   numberOfFriends = 4;
//   let contribute = 100 / 4;
//   console.log(contribute);
// }
// splitBill();

// let a = 10;
// let b = 20;
// function aug(a, b) {
//   console.log(a + b);
// }
// aug((a, 70), (b, 40));

// let a = ('10' + 20)
// function outer(){
//     let b = ('40' + 15)
//     console.log(b)
// }
// outer()
// console.log(a)

// let a = 0;
// while (a <= 20) {
//     a++;
//   console.log(a);
// }

// for (let i = 0; i <= 20; ) {
//   console.log(i);
//   i++;
// }

// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// fun1(() => fun2(() => fun3(() => fun4(() => fun5(fun6)))));

// function fun1(callback) {
//   console.log("this is a fun1 running");
//   callback();
// }
// function fun2(callback2) {
//   console.log("this is a fun2 running");
//   callback2();
// }
// function fun3(callback3) {
//   console.log("this is a fun3 running");
//   callback3();
// }

// function fun4(callback4) {
//   console.log("this is a fun4 running");
//   callback4();
// }

// function fun5(callback5) {
//   console.log("this is a fun5 running");
//   callback5();
// }

// function fun6() {
//   console.log("this is a fun6 running");
// }

// setInterval(function () {
//     var d = Date();
//   console.log(d);
// }, 1000);

// setInterval(function () {
//   var d =  Date();
//   console.log(d);
// // }, 1000);

// function greet() {
//   console.log(arguments);
// }
// greet(10 + 20);

// let a = 0;
// while (a <= 20) {
//     console.log(a);
//     a++;
// // }
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     let row = '*'
//   for (let j = 1; j <=1; j++) {
//     console.log(`${row} ${j}   `)
//   }
// }

// function fun1(a, b) {
//   var sum = a + b;
//   function fun2() {
//     var mul = 5 * sum;
//     console.log(mul);
//   }
//   fun2();
// }
// fun1(2, 2);

// function fun1(a, b) {
//   return a + b;
// }

// function fun2(sum) {
//   var result = fun1(10, 20);
//   console.log(result);
// }
// fun2();

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (let j = 5; j >= 1; j--) {
//   console.log(j);
// // }
// let arr = [];
// for (let a = 1; a <= 5; a++) {
//   arr.push(a);
// }
// console.log(...arr);
// console.log(...arr.reverse());

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// function analyze(arr) {
//   let evencount = 0;
//   let oddnums = 0;

//   for (const nums of arr) {
//     if (nums % 2 === 0) {
//       evencount += nums;
//     } else {
//       oddnums++;
//     }
//   }
//   return { evencount, oddnums };
// }
// console.log(analyze([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(Date())

// function greet() {
//   console.log("Hellow world!!!");
// }
// greet();

// function fun(name) {
//   console.log("My name is " + name);
// }
// fun("Awais");

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 5));

// function greeto(num) {
//   return num % 2 === 0;
// }
// console.log(greeto(4
// ));

// function squ(num) {
//   return num * num;
// }
// console.log(squ(10));

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log(max(10, 20));

// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(4, 2));

// const fun = (a, b) => {
//   return a - b;
// };
// console.log(fun(4, 4));

// function greet() {
//   let a = 10;
//   function greet2() {
//     console.log(a);
//   }
//   greet2();
// }
// greet();

// function greet(arr) {
//   let sum = 0;

//   for (let nums of arr) {
//     sum += nums;
//   }
//   return sum;
// }
// console.log(greet([1, 2, 3, 4]));

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if ("aeiou".includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("aeiou"));
// function revstr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(revstr("hllow"));

// function cal1(callback) {
//   console.log("this is a function 1");
//   callback();
// }
// function cal2() {
//   console.log("this is  a function 2");
// }

// // cal1(cal2);
// (function () {
//   console.log("IIFE is running");
// })();

// function leap(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("this is a leap year" + year);
//   } else console.log("Not a leap year");
// }
// leap(2008);

// for (let i = 1; i <= 2500; i++) {
//   if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
//     console.log(i + " is a leap year");
//   } else {
//     console.log(i + " is not a leap year");
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let arr = [];

// for (let i = 5; i >= 1; i--) {
//   arr.push(i);
// }
// console.log(...arr);
// let rev = arr.reverse();
// console.log(...arr);

// for (let i = 1; i <= 2500; i++) {
//   if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
//     console.log(i + " leap year");
//   } else console.log(i + "not a leap year");
// }

// function fun1() {
//   let count = 0;
//   function fun2() {
//     count++;
//     console.log(count);
//   }
//   return fun2;
// }
// let result = fun1();

// function greet() {
//   let a,
//     a = 10;
//   a = "10";
//   console.log(a);
//   a = 20;
//   console.log(a);
// }

// let a = 20;
// a = 30;
// a = 20;

// console.log(a);
// greet();

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// console.log(a);
// var a = 10;

// func();

// let func = () => {
//   var a = 10;
//   // console.log(a);
// };

// const student = {
//   name: "awais",
//   class: "b-7",
//   age: 19,
// };
// console.log(student.name);
// console.log(student["age"]);

// let arr = [1, 2, 3, 45, 6, 7, 8, 9];
// let result = arr.includes(10);
// console.log(result);

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// arr.sort();
// console.log(arr);
// let arr = [10, 9, 8, 76, 5, 4, 3, 2, 1];
// arr.sort((a, b) => a - b);
// console.log(arr);
// console.log(arr);

// function func() {
//   let obj = { name: "Awais", section: "b-7" };
//   console.log(this.section);
// }
// func();
// console.log(+0 === -0);

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(1));

// let students = {
//   name: "Awais",
//   fatherName: "Tariq",
//   section: {
//     boys: "b-7",
//     number: 123456789,
//     campus: {
//       campus: "superior college gujrat",
//     },
//   },

//   func() {
//     console.log(this.name, this.section, this.campus);
//   },
// };

// let {
//   name,
//   section: {
//     boys,
//     number,
//     campus: { campus },
//   },
// } = students;

// console.log(name, boys, number, campus);
// students.func();

// for (i = 1; i <= 5; i++) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     a += "*";
//   }
//   console.log(a);
// }

//     *
//    **
//   ***
//  ****
// // *****
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz");
//   } else if (i % 3 === 0) {
//     console.log("buzz");
//   } else if (i % 5 === 0) {
//     console.log("fizzBuzz");
//   } else {
//     console.log(i);
//   }
// // }
// function func() {
//   let arr = [2, 4, 5, 6, 7, 8];
//   let even = 0;
//   let odd = 0;

//   for (arrays of arr) {
//     if (arrays % 2 === 0) {
//       even++;
//     } else odd++;
//     return { even, odd };
//   }
// }

// console.log(func());

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// console.log(sum);

// let arr = [5, 12, 8, 130, 44];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let arr = [3, 3, 3, 3];
// let max = arr[0];
// for (let i = 1; i <= arr.length; i++) {
//   if (arr[i] >= max) {
//     max = arr[i];
//   }
// }
// console.log(max);
// (function () {
//   console.log("this is  a IIFE");
// })();
// var a = "Ali";

// if (true) {
//   console.log(a);
//   a = "Awais";
// }
// console.log(a);

// let obj = { name: "awais", age: 19 };
// let obj2 = { name, ...rest };
// obj.name = "ali";

// "9" == 9;
// "false" == 0;
// null == 0;

// switch (2) {
//   case 1:
//     console.log("january");
//   // break;
//   case 2:
//     console.log("febuary");
//   // break;
//   default:
//     console.log("Not a month");
// }

// let obj = { name: "awais", age: 19 };
// let obj2 = { ...obj };
// obj.name = "ali";
// console.log(obj2);
// let a = 10;
// let b = a;
// a = 20;

// console.log(a);
// console.log(b);

// let a = { name: "Awais", Age: 19 };
// let b = a;
// b.name = "ash";
// console.log(b);

// let arr1 = [1, 2, 3];
// let arr2 = JSON.parse(JSON.stringify(arr1));
// arr2.push(4);
// console.log(arr2);

// let arr3 = [...arr1];
// arr3.push(4);
// console.log(arr3);

// let arr4 = arr1;
// arr4.push(4);
// console.log(arr1);

// let a = {
//   name: "Awais",
//   age: 20,
//   section: {
//     boys: "b-7",
//   },
// };
// let b = { ...a };
// b.name = "ash";
// b.age = 200;
// b.section.boys = "b-8";

// console.log(a);
// console.log(b);
// // Creation
// let box = document.createElement("div");
// box.textContent = "I am alive!";
// document.body.appendChild(box);
// console.log("Created:", box);

// // Update;
// setTimeout(() => {
//   box.style.color = "blue";
//   box.textContent = "I am updated!";
//   console.log("Updated:", box);
// }, 2000);

// // Destruction
// setTimeout(() => {
//   document.body.removeChild(box);
//   console.log("Destroyed:", box);
// }, 5000);

// // creation phase
// let box = document.createElement("div");
// let paragraph2 = document.createElement("p");
// let heading = document.createElement("h1");

// box.textContent = "I am alive box";
// paragraph2.textContent = "I am  a paragraph";
// heading.textContent = " Heading";
// document.body.appendChild(box);
// document.body.appendChild(paragraph2);
// document.body.appendChild(heading);

// console.log("Created", box, paragraph2, heading);
// // Update phase

// setTimeout(() => {
//   box.style.color = "blue";
//   paragraph2.style.color = "cyan";
//   heading.style.color = "red";

//   console.log("Updated", box, paragraph2, heading);
// }, 3000);

// setTimeout(() => {
//   document.body.removeChild(box);
//   document.body.removeChild(paragraph2);
//   document.body.removeChild(heading);

//   console.log("Destrotyed", box, paragraph2, heading);
// }, 4000);

// const arr = [5];
// const result = arr.find((num) => num > 8);
// console.log(result);
// let arr = [10, 20, 30, 3, 4, 5, 6];
// let arr2 = JSON.parse(JSON.stringify(arr));
// console.log(arr2);
// console.log(arr);

// let a = arr.slice(1);
// let b = arr.splice(1, 3);

// console.log(a);
// console.log(b);

// (function func1() {
//   console.log("This is a IIFE");
// })();
// function one() {
//   console.log("One");
//   two();
// }

// function two() {
//   console.log("Two");
// }

// console.log("Start");
// one();
// console.log("End");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = arr.filter((n) => n % 2 === 0);
// const even2 = arr.map((n) => n % 2 === 0);
// console.log(even);
// console.log(even2);

// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }

// console.log("Chat app loaded");

// setTimeout(() => {
//   console.log("New message is displayed");
// }, 2000);
// setTimeout(() => {
//   console.log("old messsages loaded");
// }, 3000);

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// let heading = document.getElementById("heading");

// setInterval(() => {
//   heading.innerText = new Date().toLocaleTimeString();
//   console.log(heading);
// }, 1000);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result1 = arr.map((e) => {});
// let result2 = arr.filter((e) => {});

// console.log(result1);
// console.log(result2);
// flase true flase true flase true false true false true
//  2 4 6 8 10

// // Manual Promise
// let mypromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("data Fetched");
//   } else {
//     reject("error got");
//   }
// });
// //  Promise consume

// mypromise

//   .then(() => {
//     console.log("result");
//   })
//   .catch(() => {
//     console.log("error");
//   });

// async function test() {
//   console.log(1);
//   await Promise.resolve();
//   console.log(2);
// }

// Promise.resolve().then(() => console.log(3));

// test();

// // console.log(4);
// console.log("Pizza order");

// let orderPizza = () => {
//   return new Promise((resolve, reject) => {
//     let ingredients = false;

//     if (ingredients) {
//       resolve("Pizza Ready");
//     } else {
//       reject("Out of Stock");
//     }
//   });
// };

// async function handleOrder() {
//   try {
//     const msg = await orderPizza();
//     console.log(msg);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handleOrder();

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function promise() {
//   let promises = new Promise((resolved, reject) => {
//     let success = true;4
//     if (success) {
//       resolved("Promise Fetched");
//     } else {
//       reject("Promise Reject");
//     }
//   });
//   promises
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// promise();

// console.log("start");

// setTimeout(() => {
//   console.log("Timer");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promises");
// });

// async function func1() {
//   try {
//     let promise = await new Promise((resolve) => {
//       resolve("fetched");
//     });
//     console.log(promise);
//   } catch (error) {
//     console.log(error);
//   }
// }

// func1();

// console.log("end");

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//     setTimeout(() => console.log("Timeout 2"), 0);
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// async function asyncFunc() {
//   console.log("Async Start");
//   await Promise.resolve();
//   console.log("Async End");
// }

// asyncFunc();

// console.log("End");

// async function func1() {
//   console.log("async Start");
//   await Promise.resolve();
//   console.log("async end");
// }
// func1();
// console.log(10);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// setTimeout(() => {
//   console.log("timer");
// }, 1000);

// console.log(20);

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// setTimeout(() => {
//   console.log("timer2");
// }, 1000);

// async function func2() {
//   console.log("async 2");
//   await Promise.resolve();
//   console.log("async222 end");
// }
// func2();

// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });

// async Start
// 10
// 20
// async 2
// async end
//  Promise 1
// Promise 2
// async222 end
// Promise 3
// Timer
// Timer2

// console.log("Start");

// setTimeout(() => {
//   console.log("1");
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("2");
// });

// console.log("mid");
// setTimeout(() => {
//   console.log("3");
// }, 1000);
// async function func1() {
//   console.log("7");
//   let result = await new Promise((resolve) => {
//     resolve("4");
//   });
//   console.log(result);
// }
// func1();
// setTimeout(() => {
//   console.log("5");
// }, 1000);
// console.log("End");

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("promise resolved");
//   } else {
//     reject("Promise is not resolved");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

// async function func1() {
//   try {
//     let result = await new Promise((resolve, reject) => {
//       let success = true;
//       if (success) {
//         resolve("Promise resolved");
//       } else {
//         reject("Promise reject");
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("mango");
//   }
// }
// func1();

// if(0) {
//     console.log("something")
// }

// console.log("A" && "B" && "C")
// // "C"

// console.log(0 || "B" || "C")
// //B

// ??

// let abc = 100;
// if (function xyz() {}) {
//   abc = abc + typeof xyz;
// }
// console.log(abc);

// function abc() {}
// console.log(typeof abc);

// let obj = {
//   xyz: "mango",
//   pqr: function () {
//     console.log(this.xyz);
//   },
// };
// const c = obj.pqr;
// obj.pqr();
// c();
// const value1 = "5";
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum);

// console.log(typeof Boolean);

// function outer(x) {
//   let sum = x;
//   function inner(y) {
//     sum = x + y;
//     return sum;
//   }
//   return inner;
// }
// let f = outer(4);
// f(4);
// f(4);
// f(4);
// console.log(f(4));

// console.log(f(2));
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// let obj = {
//   name: "awais",
//   age: 18,
//   homeTown: {
//     city: "gujrat",
//     address: "kunjah",
//     houseNo: 31,
//     school: {
//       school: "The educator saddi campus",
//     },
//   },
// };

// let {
//   homeTown: {
//     city,
//     houseNo,
//     school:  school ,
//   },
//   ...rest
// } = obj;

// console.log(city, houseNo, school);

// let a = 10;
// (function outer() {
//   let a = 20;
//   (function inner() {
//     a++;
//     console.log(a);
//     var a = 30;
//   })();
// })();

// let arr = ["Awais", "Saqib", "Ali ", "Umair"];
// let result = arr.splice(1, 2);
// console.log(result);

// let obj = {
//   name: "Awais",
//   details: {
//     age: 19,
//     email: "Exmaple@gmail.com",
//     number: "03022228021",
//   },
// };
// let {
//   name,
//   details: { age, email, number },
// } = obj;

// obj.details.email = "example";

// console.log(email);

// document.getElementById("grand-parent").addEventListener("click", () => {
//   console.log("grand-parent Clicked");
// });

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent Clicked");
// });

// document.getElementById("child").addEventListener("click", () => {
//   // event.stopPropagation();
//   console.log("child");
// });

// let numbers = [5, 2, 9, 1, 5, 6];
// let temp = undefined;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > numbers[i + 1]) {
//     temp = numbers[i];
//     numbers[i] = numbers[i + 1];
//     numbers[i + 1] = temp;
//     i = -1;
//   }
// }
// console.log("ascending:", numbers);

// let numbers = [5, 2, 9, 1, 5, 6];
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(numbers);

// let numbers = [5, 2, 9, 1, 5, 6];
// let n = numbers.length;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (numbers[j] < numbers[j + 1]) {  // descending ke liye condition ulta
//             // swap
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//         }
//     }
// }

// console.log("Descending:", numbers);
// // Output: [9, 6, 5, 5, 2, 1]

// let x = 5;
// let y = 3;
// let z = 1;
// let a = 10;

// if (x > y && x > z && x > a) {
//   console.log("x is greater");
// } else if (y > x && y > z && y > a) {
//   console.log("y is greater");
// } else if (z > x && z > y && z > a) {
//   console.log("z is greater");
// } else {
//   console.log("a is greater");
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let unique = [];
// let isDuplicate;

// for (let i = 0; i < arr.length; i++) {
//   isDuplicate = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     unique[unique.length] = arr[i];
//   }
// }

// console.log(unique);

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// Stars program:

// let numbers = 5;

// for (let i = 1; i <= numbers; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let numbers = 5;

// for (let i = 1; i <= numbers; i++) {
//   let row = "";
//   for (let j = 1; j <= numbers - i + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// // }
// let arr = [1, 2, 3, 2, 4, 1, 5];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   let found = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     unique.push(arr[i]);
//   }
// }

// // console.log(unique);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// array sroting 3 examples

// let prices = [500, 120, 890, 45, 300];
// for (let i = 0; i < prices.length; i++) {
//   for (let j = 0; j < prices.length - i - 1; j++) {
//     if (prices[j] > prices[j + 1]) {
//       let temp = prices[j];
//       prices[j] = prices[j + 1];
//       prices[j + 1] = temp;
//     }
//   }
// }

// for (let i = 0; i < prices.length; i++) {
//   for (let j = i + 1; j < prices.length; j++) {
//   if (prices[i] > prices[j]) {
//     let temp = prices[i];
//     prices[i] = prices[j];
//     prices[j] = temp;
//         }
//   }
// }
//   console.log(prices);

// let numbers = [99, 8, 7, 6, 5, 4, 321];

// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// let temp = [38, 42, 35, 47, 40, 33, 45];

// let max_temp = temp[0];

// for (let i = 0; i < temp.length; i++) {
//   if (temp[i] > max_temp) {
//     max_temp = temp[i];
//   }
// }
// console.log(max_temp);

// let runs = [45, 78, 23, 91, 56, 34];
// let max_runs = runs[0];
// for (let i = 0; i < runs.length; i++) {
//   if (runs[i] > max_runs) {
//     max_runs = runs[i];
//   }
// }

// console.log(max_runs);

// for (let i = 0; i < 5; i++) {
//   row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   let found = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);

// let names = ["Ali", "Ahmed", "Ali", "Usman", "Ahmed"];
// let unique = [];

// for (let i = 0; i < names.length; i++) {
//   let found = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (names[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     unique.push(names[i]);
//   }
// }

// console.log(unique);

// let arr = [7, 3, 7, 1, 9, 3, 1];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   let found = false;

//   for (let j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     unique.push(arr[i]);
//   }
// }

// console.log(unique);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function proccess_Numbers(arr, operation) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = operation(arr[i]);
//   }
//   return resul
// t;
// }
// ----------- Event bubbling -------------

// document.getElementById("Grand-parent").addEventListener("click", () => {
//   console.log("grand-parent Clicked");
// });
// document.getElementById("Parent").addEventListener("click", () => {
//   console.log("Parent Clicked");
// });
// document.getElementById("Child").addEventListener("click", (Event) => {
//   Event.stopPropagation();
//   console.log("Child Clicked");
// });

// document.getElementById("Parent").addEventListener("click", () => {
//   console.log("Parent Clicked");
// });

// document.getElementById("products").addEventListener("click", (event) => {
//   if (event.target.classList.contains("add")) {

//    let card = event.target.parentElement;
//    let productName = card.querySelector("h3").textContent;
//    console.log(productName + " added to cart");

//   }
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.map(function (num) {
//   return num * num;
// });
// console.log(result);

// function intro(name, age, school, city) {
//   console.log(
//     `my name is ${this.name} and my age is ${this.age} and i am from ${this.city} and i study in ${this.school}`
//   );
// }
// intro.call({ name: "Awais", age: 19, school: "The educator", city: "Gujrat" });

// function intro(name, age, school, city) {
//   console.log(
//     `my name is ${this.name} and my age is ${this.age} and i am from ${this.city} and i study in ${this.school}`
//   );
// }
// intro.apply({ name: "Awais", age: 19, school: "The educator", city: "Gujrat" });

// let obj = {
//   name: "Awais",
//   age: 19,
//   school: "The educator",
//   city: "Gujrat",
//   education: "Intermediate",
//   greet: function () {
//     console.log(
//       `my name is ${this.name} and my age is ${this.age} and i am from ${this.city} and i study in ${this.school}`
//     );
//   },
//   edu: functions() {
//     console.log(`my education is ${this.education}`);
//   },
// };
// let greetfunc = obj.greet.bind(obj);
// let edufunc = obj.edu.bind(obj);

// greetfunc();
// edufunc();

// const user = {
//   name: "Awais",
//   showName: function () {
//     console.log("User name is:", this.name);
//   },
// };

// const connectbtn = user.showName.bind(user);
// document.getElementById("btn").addEventListener("click", connectbtn);

// const user = {
//   name: "Awais",
//   login: function (time) {
//     console.log(`${this.name} logged in at ${time}`);
//   },
// };
// function processLogin(callback) {
//   setTimeout(callback, 2000);
// }

// processLogin(user.login.bind(user));

// let arr = [1, 3, 5, 7, 9, 0, 7, 5, 2, 7, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 89, 8, 7, , 6, 5, 43, 21];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// for (let i = 0; i <= 5; i++) {
//   row = " ";
//   for (let j = 0; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 5; i > 0; i--) {
//   row = " ";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }

// let n = 9;

// for (let i = 1; i <= n; i++) {
// if (i === 2) {
//   continue;
// }
// if (i === 4) {
//   continue;
// }
// if (i === 6) {
//   continue;
// }
// if (i === 8) {
//   continue;
// }

// if (i % 2 === 0) {
//   continue;
// }

//   let row = "";

//   for (let j = 0; j < (n - i) / 2; j++) {
//     row += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = n - 2; i >= 1; i--) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   let row = "";

//   for (let j = 0; j < (n - i) / 2; j++) {
//     row += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let arr = [1, 25, 7, 8, 9, 5];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr = [9, 1, 6, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

// let arr = [5, 9, 2, 15, 7];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let n = 5;

// for (let i = 1; i <= 2 * n - 1; i++) {
//   let row = "";

//   // yeh decide karega actual row number
//   let totalCols = i <= n ? i : 2 * n - i;

//   // spaces
//   for (let j = 1; j <= n - totalCols; j++) {
//     row += " ";
//   }

//   // stars
//   for (let k = 1; k <= 2 * totalCols - 1; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let arr = [1, 2, 3, 2, 4, 1, 5];
// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   let alreadyFound = false;
//   for (let d = 0; d < duplicates.length; d++) {
//     if (duplicates[d] === arr[i]) {
//       alreadyFound = true;
//       break;
//     }
//   }

//   if (alreadyFound) continue;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       duplicates.push(arr[i]);
//       break;
//     }
//   }
// }

// console.log("Duplicates:", duplicates);

// ---------------object problem --------------------

// let car = {
//   brand: "Toyota",
//   model: 2025,
//   year: 2025,
// };
// console.log(car.brand);

// let student = {
//   name: "Awais",
//   marks: [80, 90, 70],
// };
// let total = student.marks.reduce((acc, curr) => acc + curr);
// console.log(total);

// let average = total / 3;

// console.log(average);

// let product = {
//   name: "Awais",
//   price: 2000,
//   discount: 90,
// };
// let { name, price, discount } = product;

// let finalPrice = price - (price * discount) / 100;

// console.log(finalPrice);
// let bankAccount = {
//   name: "Awais",
//   balance: 3000,

//   deposit: function (amount) {
//     if (amount <= 0) {
//       console.log("Error: Deposit amount must be positive.");
//     } else {
//       this.balance += amount;
//       console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
//     }
//   },

//   withdraw: function (amount) {
//     if (amount <= 0) {
//       console.log("Error: Withdrawal amount must be positive.");
//     } else if (amount > this.balance) {
//       console.log(
//         `Error: Insufficient funds. Current balance: ${this.balance}`
//       );
//     } else {
//       this.balance -= amount;
//       console.log(`Withdrawn: ${amount}, Remaining Balance: ${this.balance}`);
//     }
//   },
// };

// bankAccount.deposit(500);
// bankAccount.withdraw(1000);

// console.log("5" - 3); // ?
// console.log("5" + 3); // ?
// console.log("5" * "2"); // ?
// console.log("5" / 2); // ?

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     // break;
//     // continue;
//   }
//   console.log(i);
// }

// console.log([] = {} ? "true" : "false");

// (function () {
//   console.log("IIFE is running");
// })();

// hoistedVariable = 3;
// console.log(hoistedVariable);
// var hoistedVariable;

// function executeFunction(func) {
//   return func();
// }

// executeFunction(function () {
//   console.log("hello");
// });

// let obj = {
//   name: "Awais",
//   check: function () {
//     return console.log(this.name);
//   },
// };
// obj.check();

// (function () {
//   console.log("IIFE is running");
// })();

// for (var j = 0; j < 2; j++) {
// }
// console.log(j); // Outputs 2


console.log("hellow world")

