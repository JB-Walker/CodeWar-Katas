// 145
myStr = "Hello World"; // Fix Me

// 146
var thirdLetterOfLastName = lastName[2];

// 147
var lastLetterOfLastName = lastName[lastName.length - 1];

// 148
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//149
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result = "The huge, " + myAdjective + " " + myNoun + " " + myVerb + " around the corner " + myAdverb + "!!";
    // Your code above this line
    return result;
}

//150
var myArray = ["happy", 13];

//151
var myArray = [[1, 2, 3], [4, 5, 6]];

// 152
var myData = myArray[0];

// 153
myArray[0] = 3;

// 154
var myData = myArray[2][1];

// 155
myArray.push(["dog", 3]);

// 156
var removedFromMyArray = myArray.shift();

// 157
myArray.unshift(["Paul",35]);

// 158
var myList = [['soap',1],['bread',2],['hot dog',24],['donuts',6],['soda',3]];

//159
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// 160
function functionWithArgs (num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(3,15);

// 161
var myGlobal = 10;
// Declare your variable here
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5; 
}

// 162
function myLocalScope() {
    'use strict';
    var myVar;
    console.log(myVar);
}
myLocalScope();

// 163
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();

// 164
function timesFive(num) {
  return num * 5;
}

// 165
processed = processArg(7);

// 166
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// 167
function welcomeToBooleans() {
  return true;
}

// 168
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) { 
    return "Yes, that was true";
  }
  return "No, that was false";
}

// 169
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
}
testEqual(12);

// 170
function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
}
testStrict(7);

// 171
function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
}
testNotEqual(99);

// 172
function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(17);

// 173
function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    }
    if (val > 10) {
      return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(101);

// 174
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
    return "9 or Under";
}
testGreaterOrEqual(10);

// 175
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
    if (val < 55) {  // Change this line
      return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

// 176
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
    return "25 or More";
}
testLessOrEqual(10);

// 177
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// 178
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(9);

// 179
function testElse(val) {
    var result = "";    
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
}
testElse(4);

