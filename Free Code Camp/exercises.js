// Remaining Lessons from Basic JavaScript

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

// 180
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }
}
testElseIf(7);

// 181
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

// 182 Golf -- programmed earlier
// 183
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;  
  }
  caseInSwitch(1);

  // 184
  function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
    return answer;  
}
switchOfStuff(1);

// 185
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;  
}
sequentialSizes(1);

// 186
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
          case 42:
        answer = "The Answer";
        break;
          case 1:
        answer = "There is no #1";
        break;
          case 99:
        answer = "Missed me by this much!";
        break;
          case 7:
        answer = "Ate Nine";
        break;
    }
      return answer;  
}
chainToSwitch(7);

// 187
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);

// 188
function abTest(a, b) {
    if (a < 0 || b < 0) {
      return;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,2);

  // 189
  var count = 0;
  function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count += 1;
        break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count -= 1;
    }
    if (count < 1) {
      return count + " Hold";
    }
    return count + " Bet";
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// 190
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// 191
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };  
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// 192
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};  
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// 193
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };  
var playerNumber = 16;     
var player = testObj[playerNumber];

// 194
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"]
};
myDog.name = "Happy Coder";

// 195
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"]
};
myDog.bark = "woof";

// 196
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"],
    "bark": "woof"
};
delete myDog.tails;

// 197
function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
phoneticLookup("charlie");

// 198
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  function checkObj(checkProp) {
      if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
      }
    return "Not Found";
}
checkObj("gift");

// 199
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CS", 
        "8T", 
        "LP" ],
      "gold": true
    },
    {
      "artist": "Billy Jean",
      "title": "Women's Tennis soundtrack",
      "release_year": 1976,
      "formats": [ 
        "CBS", 
        "ABC", 
        "NBC" ],
      "gold": true
    }
];

// 200
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

// 201
var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
];
var secondTree = myPlants[1].list[1];

// 202
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

// 203
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// 204
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// 205
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// 206
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

// 207
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

// 208
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
function lookUpProfile(firstName, prop){
    var nameIterator = 0;
    while (nameIterator < contacts.length) {
      if (contacts[nameIterator].firstName == firstName) {
        if (contacts[nameIterator].hasOwnProperty(prop)) {
            return contacts[nameIterator][prop];
        } else {
            return "No such property";
        }
      }
      nameIterator++;
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");

// 209
function randomFraction() {
    return Math.random();
}

// 210
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// 211
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
var myRandom = randomRange(5, 15);

// 212
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
var expression = /and/gi;
var andCount = testString.match(expression).length;

// 213
var testString = "There are 3 cats but 4 dogs.";
var expression = /\d+/g;
var digitCount = testString.match(expression).length;

