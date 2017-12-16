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

// 307. ES6: Declare a Read-Only Variable with the const Keyword
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


