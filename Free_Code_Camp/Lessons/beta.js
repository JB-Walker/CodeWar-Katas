// 1. Basic JavaScript: Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
// The function should return either true or false.
function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);

// 2. Basic JavaScript: Use Multiple Conditional (Ternary) Operators
// Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
function checkSign(num) {
    return num === 0 ? "zero" : (num > 0) ? "positive" : "negative";
}
checkSign(10);

// 3. Basic JavaScript: Profile Lookup
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return "No such contact"
// If prop does not correspond to any valid properties of a contact found to match name then return "No such property"
//
// wip - 1st attempt
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
    const data = contacts.find( function( ele ) { 
      return ele.firstname === name;
    });
    if (data) {
      return data.hasOwnProperty(prop) ? data.prop : "No such property";
    } else {
      return "No such contact";
    }
}
lookUpProfile("Akira", "likes");

// 4. Introduction to the ES6 challenges
// ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. 
// As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the 
// term JavaScript. Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, 
// finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, 
// new versions of the language are released for use by developers. The most recent standardized version is called 
// ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be 
// covered in this section of challenges, including:
// 
// Arrow functions
// Classes
// Modules
// Promises
// Generators
// let and const

// 5. ES6: Explore Problems with the var Keyword
// Fix the code so that it only uses the let keyword and makes the errors go away.
'use strict';
let redNosedReindeer = "Rudolph";
let favorite = redNosedReindeer + " is Santa's favorite reindeer.";

// 6. ES6: Compare Scopes of the var and let Keywords
// This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared 
// variable. When programming a function similar to the one used in this exercise, it is often better to use different 
// variable names to avoid confusion. ix the code so that i declared in the if statement is a separate variable than 
// i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
//
// Sample unexpected scoping issue:
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
// Alternative version using let:
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
//
// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of 
// the function. Be certain not to use the var keyword anywhere in your code.
'use strict';
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

// 7. ES6: Declare a Read-Only Variable with the const Keyword
// Change the code so that all variables are declared using let or const. Use let when you want the variable to change, 
// and const when you want the variable to remain constant. Also, rename variables declared with const to conform to 
// common practices.
'use strict';
// change 'var' to 'let' or 'const'
// rename constant variables
const PI = 3.14;
const RADIUS = 10;
var calculateCircumference = function(RADIUS) {
  const DIAMETER = 2 * RADIUS;
  var RESULT = PI * DIAMETER;
  return RESULT;
};
// Test your code
console.log(calculateCircumference(RADIUS));

// 8. ES6: Mutate an Array Declared with const
// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
// unclear iunstructions - 1st attempt
"use strict";
const s = [5, 7, 2];
s[0] = 2;
s[1] = 5;
s[2] = 7;
console.log(s);
// unclear iunstructions - 2nd attempt
"use strict";
const s = [5, 7, 2];
s.sort();
console.log(s);
// THERE MUST BE AN ERROR IN THE BETA.

// 9. ES6: Prevent Object Mutation
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. 
// You need to freeze MATH_CONSTANTS object so that noone is able alter the value of PI or add any more properties to it.
'use strict';
const MATH_CONSTANTS = {
  PI: 3.14
};
Object.freeze(MATH_CONSTANTS);
MATH_CONSTANTS.PI = 99;
console.log(MATH_CONSTANTS.PI);// should show 3.14

// 10. ES6: Use Arrow Functions to Write Concise Anonymous Functions
// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
// Also make sure nothing is defined using the keyword var.
'use strict';
const magic = () => new Date();
console.log(magic());

// 11. ES6: Write Arrow Functions with Parameters
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
'use strict';
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// 12. ES6: Write Higher Order Arrow Functions
// Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the 
// array realNumberArray and store the new array in the variable squaredIntegers.
'use strict';
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const positiveNumbers = realNumberArray.filter(num => num > 0 && Number.isInteger(num));
const squaredIntegers = positiveNumbers.map((x) => x * x);
console.log(squaredIntegers);
// This can also be chained:
'use strict';
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squaredIntegers = realNumberArray.filter(num => num > 0 && Number.isInteger(num))
  .map((x) => x * x);
console.log(squaredIntegers);

// 13. ES6: Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
'use strict';
function increment(number, value = 1) {
    return number + value;
}
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

// 14. ES6: Use the Rest Operator with Function Parameters
// Modify the function sum so that is uses the rest operator and it works in the same way with any number of parameters.
'use strict';
function sum(...array) {
    return array.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// 15. ES6: Use the Spread Operator to Evaluate Arrays In-Place
// Copy all contents of arr1 into another array arr2 using the spread operator.
'use strict';
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [...arr1];
arr1.push('JUN');
console.log(arr2);

// 16. ES6: Use Destructuring Assignment to Assign Variables from Objects
// Use destructuring to obtain the length of the string greeting.
'use strict';
const greeting = 'itadakimasu';
const {length} = greeting;
console.log(length); // should be using destructuring

// 17. ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
// Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.
'use strict';
const forecast = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
const {tomorrow : {max : maxOfTomorrow }} = forecast;
console.log(maxOfTomorrow); // should be 84.6

// 18. ES6: Use Destructuring Assignment to Assign Variables from Arrays
// Use destructuring assignment to swap the values of a and b so that a receives the 
// value stored in b, and b receives the value stored in a.
'use strict';
let a = 8, b = 6;
const array = [a, b];
[b, a] = array;
console.log(a); // should be 6
console.log(b); // should be 8

// 19. ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
// Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() 
// so that arr is a sub-array of the original array source with the first two elements ommitted.
'use strict';
const source = [1,2,3,4,5,6,7,8,9,10];
const [,, ...arr] = source;
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// 20. ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
'use strict';
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2;
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

// 21. ES6: Create Strings using Template Literals
// Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry 
// should be wrapped inside an li element with the class attribute text-warning.
'use strict';
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
const resultDisplay = `<li class="text-warning">${result.failure[0]}</li>
 <li class="text-warning">${result.failure[1]}</li>
 <li class="text-warning">${result.failure[2]}</li>`;
console.log(resultDisplay);
/**
 * should look like this
 * <li class="text-warning">no-var</li>
 * <li class="text-warning">var-on-top</li>
 * <li class="text-warning">linebreak</li>
 **/

 // 22. ES6: Write Concise Object Literal Declarations Using Simple Fields
 // Use simple fields with object literals to create and return a Person object.
 'use strict';
 const createPerson = (name, age, gender) => ({name, age, gender});
 console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

 








