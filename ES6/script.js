// //WITHOUT strict

// //case-1
// console.log(this);//this logs window object
// //case-2
// function f() {
//     console.log(this);//this logs window object
// }
// f();
// //case-3
// let obj = {
//     p: "val1",
//     //this is called direct function
//     f1: function () {
//         console.log(this);//this logs obj
//     }
// }
// obj.f1();
// //case-4
// let obj2 = {
//     p: "val1",
//     f1: function () {
//         function f2() {
//             //this is called indirect function
//             console.log(this);//this logs window object
//         }
//         f2();
//     }
// }
// obj2.f1();


// //WITH strict

// "use strict"
// //this makes the leniancy of js go away and starts giving errors.
// //strict can be used for specific blocks as well and not just for the whole program.
// //case-1
// console.log(this);//this logs window object
// //case-2
// function f() {
//     console.log(this);//this logs undefined
// }
// f();
// //case-3
// let obj3 = {
//     p: "val1",
//     //this is called direct function
//     f1: function () {
//         console.log(this);//this logs obj
//     }
// }
// obj3.f1();
// //case-4
// let obj4 = {
//     p: "val1",
//     f1: function () {
//         function f2() {
//             //this is called indirect function
//             console.log(this);//this logs undefined
//         }
//         f2();
//     }
// }
// obj4.f1();


// /*
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/explore-differences-between-the-var-and-let-keywords
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array
// */

// // normal function (keyword function; i can give it a name)
// function f1() {
//     console.log("Hi");
// }

// //arrow function (no keyword only symbols; i cannot give it name so i've to store it in a variable)
// //this in arrow functions takes the this of its parent class
// let f2 = () => {
//   console.log("Hi");
// };

// // ------------------------------------------------------

// function f3() {
//   return 2;
// }

// let f4 = () => 2;

// // --------------------------------------------------------

// function f5(a, b) {
//   return 2;
// }

// let f6 = (a, b) => 2;

// // --------------------------------------------------

// function f7(a) {
//   return 2;
// }

// let f8 = (a) => 2;

// // IIFE

// (() => {
//   console.log("THIS IS AN IIFE USING ARROW FUNCTION ");
// })();

// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array

// let a = [4, 8, 7, 9, 12, 13, 16];
// let newArr = []
// for (let i = 0; i < a.length; i++) {
//     if (i === 3)
//         newArr.push(3)
//     newArr.push(a[i]);
// }
// console.log(newArr);
// //     ... is called spread operator
// let newArr2 = [...a.slice(0, 3), 3, ...a.slice(3)]
// console.log(newArr2);


// [] with variables inside the brackets and {} with a key inside the brackets are called destructing operators.
// for arrays you get values from start to end depending on the number of variables or the number of spaces passed;
// for objects you get the value of the key in object in a variable with same name as the key;

// let a =["rahul","ram","shyam","dhyam"];

// , with no variable name are considered empty space and the corresponding value is skipped.

// let [b,,c]=a;
// console.log(b);
// console.log(c);

// //for objects

// let a={
//     b:"hello",
//     c:"bye"
// }
// let {c}=a;
//c will have bye.
//you will get undefined if key is not present
//you can also nest these arguments like this-
// let a={
//     b:{
//         z:"hello"
//     },
//     c:"bye"
// }
// let { b: { z } } = a;
