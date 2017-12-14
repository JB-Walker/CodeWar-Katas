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
// 1st attempt - wip
'use strict';
let redNosedReindeer = "Rudolph";
let favorite = redNosedReindeer + " is Santa's favorite reindeer.";
redNosedReindeer = "Comet";

// second attempt - wip
'use strict';
let favorite = redNosedReindeer + " is Santa's favorite reindeer.";
let redNosedReindeer = "Rudolph";
redNosedReindeer = "Comet";


