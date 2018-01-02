// 
// Basic JavaScript <continued>
//

// 145: Understand String Immutability 
myStr = "Hello World";

// 146: Use Bracket Notation to Find the Nth Character in a String
var thirdLetterOfLastName = lastName[2];

// 147: Use Bracket Notation to Find the Last Character in a String 
var lastLetterOfLastName = lastName[lastName.length - 1];

// 148
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//149
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result = "The huge, " + myAdjective + " " + myNoun + " " + myVerb + " around the corner " + myAdverb + "!!";
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
    if (val >= 20) {
      return "20 or Over";
    }
    if (val >= 10) {e
      return "10 or Over";
    }
    return "9 or Under";
}
testGreaterOrEqual(10);

// 175
function testLessThan(val) {
    if (val < 25) {
      return "Under 25";
    }
    if (val < 55) {
      return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

// 176
function testLessOrEqual(val) {
    if (val <= 12) {
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
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

// 214
var testString = "How many spaces are there in this sentence?";
var expression = /\s+/g;
var spaceCount = testString.match(expression).length;

// 215
var testString = "How many non-space characters are there in this sentence?";
var expression = /\S/g;
var nonSpaceCount = testString.match(expression).length;

//
//  Object Oriented and Functional Programming
//

// 216
var motorBike = {
    "wheels":2,
    "engines":2,
    "seats":1
};

// 217
var MotorBike = function() {
    this.wheels = 2;
    this.engines = 2;
    this.seats = 1;
};

// 218
var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};  
var myCar = new Car();
myCar.nickname = "Zippy";

// 219
var Car = function(wheels, seats, engines) {
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};
var myCar = new Car(4, 3, 1);

// 220
var Car = function() {
    // this is a private variable
    var speed = 10;
    // these are public methods
    this.accelerate = function(change) {
      speed += change;
    };
    this.decelerate = function() {
      speed -= 5;
    };
    this.getSpeed = function() {
      return speed;
    };
};
var Bike = function() {
    var gear = 10;
    this.getGear = function() {
      return gear;
    };
    this.setGear = function(newValue) {
      gear = newValue;
    };
};
var myCar = new Car();
var myBike = new Bike();

// 221
var oldArray = [1,2,3,4,5];
var newArray = oldArray.map(function(val) {
  return val + 3;
});

// 222
var array = [4,5,6,7,8];
var singleVal = 0;
singleVal = array.reduce(function(runningTotal, currentValue) {
  return runningTotal + currentValue;
}, 0);

// 223
var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(value) {
  return value < 6;
});


// 224
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return b - a;
});

// 225
var array = [1,2,3,4,5,6,7];
var newArray = [];
newArray = array.reverse();

// 226
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);

// 227
var string = "Split me into an array";
var array = [];
array = string.split(' ');

// 228
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join(' ');

//
// Basic Algorithm Scripting --- NOTE: Started Using ES6 (where possible)
//

// 229 --- Not a programming Lesson

// 230: Reverse a String 
function reverseString (str) {
  return str.split('').reverse().join('');
}
reverseString("hello");

//231: Factorialize a Number
function factorialize (num) {
  let factorial = 1;
  if (num > 1) {
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
  }
  return factorial;
}
factorialize(5);

// 232: Check for Palindromes
function palindrome (str) {
  let arr = str.toLowerCase().replace(/[^0-9a-z]/g, '').split('');
  if (!arr.length) {
    return false;
  }
  let reversedArr = arr.slice().reverse();
  let midPoint = Math.floor(arr.length / 2);
  for (let i = 0; i < midPoint; i++) {
    if (arr[i] != reversedArr[i]) {
      return false;
    }
  }
  return true;
}
palindrome("eye");

// 233: Find the Longest Word in a String
function findLongestWord (str) {
  let arr = str.split(' ');
  let arr1 = arr.map(function(value) {
      return value.length;
  });
  let arr2 = arr1.sort(function(a, b) {
      return a - b;
  });
  return arr2[arr2.length - 1];
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// 234: Title Case a Sentence
function titleCase (str) {
  let arr = str.toLowerCase().split(' ');
  let arrCapped = arr.map(function(value) {
      return value[0].toUpperCase() + value.substring(1);
  });
  return arrCapped.join(' ');
}
titleCase("I'm a little tea pot");

// 235: Return Largest Numbers in Arrays
function largestOfFour (arr) {
  let largestArr = arr.map(function(innerArr) {
    let innerArrSorted = innerArr.sort(function(a, b) {
      return b - a;
    });
    return innerArrSorted[0];
  });
  return largestArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 236: Confirm the Ending (w/o using endsWith)
function confirmEnding (str, target) {
  return (str.substring(str.length - target.length) === target);
}
confirmEnding("Bastian", "n");

// 237: Repeat a string repeat a string
function repeatStringNumTimes (str, num) {
  try {
    return str.repeat(num);
  }
  catch (RangeError) {
    return "";
  }
}
repeatStringNumTimes("abc", 3);

// 238: Truncate a string
function truncateString (str, num) {
  if (str.length > num) {
      if (num <= 3) {
          return str.substring(0, num) + "...";
      }
      return str.substring(0, num - 3) + "...";
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

// 239: Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let iLength = Math.ceil(arr.length / size);
  for (let i = 0; i < iLength; i++) {
    newArr[i] = [];
    for (let j = 0; j < size; j++) {
      if (arr.length) {
        newArr[i][j] = arr.shift();
      }
    }
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// 240: Slasher Flick
function slasher(arr, howMany) {
  if (!howMany) {
    return arr;
  } else if (howMany >= arr.length) {
    return [];
  } else {
    for (let i = 0; i < howMany; i++) {
      arr.shift();
    }
    return arr;
  }
}
slasher([1, 2, 3], 2);

// 241: Mutations
function mutation(arr) {
  let word = arr[0].toLowerCase();
  let letters = arr[1].toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (word.indexOf(letters[i]) < 0) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);

// 242: Falsy Bouncer
function bouncer(arr) {
  return arr.filter(function(value){
    return (value);
  });
}
bouncer([7, "ate", "", false, 9]);

// 243: Seek and Destroy
function destroyer(toBeFiltered) {
  let argsArray = Array.prototype.slice.call(arguments);
  for (let i = 1; i < argsArray.length; i++) {
    toBeFiltered = toBeFiltered.filter(function(value){
      return value !== argsArray[i];
    });
  }
  return toBeFiltered;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 244: Where do I belong
function getIndexToIns(arr, num) {
  arr.sort(function(a, b){
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}
getIndexToIns([5, 3, 20, 3], 5);

// 245: Caesars Cipher
function rot13(str) {
  let codedStr = '';
  let code;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      code = str.charCodeAt(i) + 13;
      if (code > 90) {
        code -= 26;
      }
      codedStr += String.fromCharCode(code);
    } else {
      codedStr += str[i];
    }
  }
  return codedStr;
}
rot13("SERR PBQR PNZC");

//
// JSON APIs and AJAX
//

// 246: Trigger Click Events with jQuery
<script>
  $(document).ready(function() {
    $("#getMessage").on("click", function(){});
  });
</script>
<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

// 247: Change Text with Click Events
<script>
    $(document).ready(function() {
      $("#getMessage").on("click", function(){
        $(".message").html("Here is the message");
      });
    });
</script>
<div class="container-fluid">
    <div class = "row text-center">
      <h2>Cat Photo Finder</h2>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12 well message">
        The message will go here
      </div>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12">
        <button id = "getMessage" class = "btn btn-primary">
          Get Message
        </button>
      </div>
    </div>
</div>

// 248: Get JSON with the jQuery getJSON Method
<script>
    $(document).ready(function() {
      $("#getMessage").on("click", function() {
        $.getJSON("/json/cats.json", function(json) {
          $(".message").html(JSON.stringify(json));
        });
      });
    });
</script>
<div class="container-fluid">
    <div class = "row text-center">
      <h2>Cat Photo Finder</h2>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12 well message">
        The message will go here
      </div>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12">
        <button id = "getMessage" class = "btn btn-primary">
          Get Message
        </button>
      </div>
    </div>
</div>

// 249: Convert JSON Data to HTML
<script>
    $(document).ready(function() {
      $("#getMessage").on("click", function() {
         $.getJSON("/json/cats.json", function(json) {
          var html = "";
          json.forEach(function(val) {
            var keys = Object.keys(val);
            html += "<div class = 'cat'>";
            keys.forEach(function(key) {
              html += "<strong>" + key + "</strong>: " +
                val[key] + "<br>";
            });
            html += "</div><br>";
          });
            $(".message").html(html);
         });
      });
    });
</script>
<div class="container-fluid">
    <div class = "row text-center">
      <h2>Cat Photo Finder</h2>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12 well message">
        The message will go here
     </div>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12">
        <button id = "getMessage" class = "btn btn-primary">
          Get Message
        </button>
      </div>
    </div>
</div>

// 250: Render Images from Data Sources
<script>
    $(document).ready(function() {
      $("#getMessage").on("click", function() {
        $.getJSON("/json/cats.json", function(json) {
          var html = "";
          json.forEach(function(val) {
            html += "<div class = 'cat'>";
            html += "<img src = '" + 
              val.imageLink + "' " + 
              "alt='" + val.altText + "'>";
            html += "</div>";
          });
          $(".message").html(html);
        });
      });
    });
</script>
<div class="container-fluid">
    <div class = "row text-center">
      <h2>Cat Photo Finder</h2>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12 well message">
        The message will go here
      </div>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12">
        <button id = "getMessage" class = "btn btn-primary">
          Get Message
        </button>
      </div>
    </div>
</div>

// 251: Prefilter JSON
<script>
    $(document).ready(function() {
      $("#getMessage").on("click", function() {
        $.getJSON("/json/cats.json", function(json) {
          var html = "";
          json = json.filter(function(val) {
            return (val.id !== 1);
          });
          json.forEach(function(val) {
            html += "<div class = 'cat'>"
            html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
            html += "</div>"
          });
          $(".message").html(html);
        });
      });
    });
</script>
<div class="container-fluid">
    <div class = "row text-center">
      <h2>Cat Photo Finder</h2>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12 well message">
        The message will go here
      </div>
    </div>
    <div class = "row text-center">
      <div class = "col-xs-12">
        <button id = "getMessage" class = "btn btn-primary">
          Get Message
        </button>
      </div>
    </div>
</div>

// 252: Get Geolocation Data
<script>
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude +
          "<br>longitude: " + position.coords.longitude);
      });
    }
</script>
<div id = "data">
    <h4>You are here:</h4>
</div>

//
// Intermediate Algorithm Scripting
//

// 253: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers
// and all numbers between them. The lowest number will not always come first.
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);

// 254: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two
// given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  var newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0].toString() === arr2[0].toString()) {
      arr1.shift();
      arr2.shift();
    }
    else if (arr1[0].toString() > arr2[0].toString()) {
      newArr.push(arr2.shift());
    }
    else {
      newArr.push(arr1.shift());
    }
  }
  if (arr1.length) {
    newArr = newArr.concat(arr1);
  }
  else if (arr2.length) {
    newArr = newArr.concat(arr2);
  }
  return newArr;
}
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

// 255: Roman Numeral Converter
function convertToRoman(num) {
  let roman = '';
  let count;
  function comparison(value, symbol) {
    if (num >= value) {
      count = Math.floor(num / value);
      roman += symbol.repeat(count);
      num -= value * count;
    }
  }  
  comparison(1000, "M");
  comparison(900, "CM");
  comparison(500, "D");
  comparison(400, "CD");
  comparison(100, "C");
  comparison(90, "XC");
  comparison(50, "L");
  comparison(40, "XL");
  comparison(10, "X");
  comparison(9, "IX");
  comparison(5, "V");
  comparison(4, "IV");  
  comparison(1, "I");
  return roman;
}
convertToRoman(36);

// 256: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object from
// the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  var arr = [];
  let requiredProperties = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    // Assume that the collection object has all requiredProperties and that
    // each property has the required value. Try to prove this false.
    let match = true;
    for (let j = 0; j < requiredProperties.length; j++) {
      if (collection[i].hasOwnProperty(requiredProperties[j])) {
        if (collection[i][requiredProperties[j]] !== source[requiredProperties[j]]) {
          // The collection object has the requiredProperty, but wrong value
          match = false;
        } // Otherwise the collection object does have the requiredProperty
          // and the correct value. Match remans true. j increments and testing continues
      }
      else {
        // The collection object does not have the requiredProperty
        match = false;
      }
    }
    if (match) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// 257: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on. Second argument is the word that
// you will be replacing (before). Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace
// the word "Book" with the word "dog", it should be replaced as "Dog"
function myReplace(str, before, after) {
  if (before[0].match(/[A-Z]/)) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  }
  return str.replace(before, after);
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// 258: Pig Latin
// Translate the provided string to pig latin. Pig Latin takes the first consonant
// (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be
// English words in all lowercase.
function translatePigLatin(str) {
  if (str[0].match(/a|e|i|o|u/)) {
    return `${str}way`;
  }
  for (let i = 1; i < str.length; i++) {
    if (str[i].match(/a|e|i|o|u/)) {
      return str.substring(i) + str.substring(0, i) + 'ay';
    }
  }
}
translatePigLatin("glove");

// 259: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair,
// and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the
// missing element to the provided character. Return the provided character as the first
// element in each array.
function pairElement(str) {
  let inputArr = str.split('');
  let pairs = {'A': 'T',
               'C': 'G',
               'G': 'C',
               'T': 'A'};
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    outputArr[i] = [inputArr[i], pairs[inputArr[i]]];
  }
  return outputArr;
}
pairElement("GCG");

// 260: Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i - 1) + 1 !== str.charCodeAt(i)) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");

// 261: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}
booWho(null);

// 262: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values 
// in the order of the original provided arrays. In other words, all values present from all
// arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not
// be sorted in numerical order.
function uniteUnique(arr) {
  let argsArray = Array.prototype.slice.call(arguments);
  let concatedArrays = [];
  for (let i = 0; i < argsArray.length; i++) {
    concatedArrays = concatedArrays.concat(argsArray[i]);
  }
  for (let i = 0; i < concatedArrays.length - 1; i++) {
    for (let j = i + 1; j < concatedArrays.length; j++) {
      if (concatedArrays[i] === concatedArrays[j]) {
        concatedArrays.splice(j, 1);
        j--;
      }
    }
  }
  return concatedArrays;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 263: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '&':
        arr[i] = '&amp;';
        break;
      case '<':
        arr[i] = '&lt;';
        break;
      case '>':
        arr[i] = '&gt;';
        break;
      case '"':
        arr[i] = '&quot;';
        break;
      case "'":
        arr[i] = '&apos;';
        break;
    }
  }
  str = arr.join('');
  return str;
}
convertHTML("Dolce & Gabbana");

// 264. Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let arr = str.split('');
  arr[0] = arr[0].toLowerCase();
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].match(/[^A-Za-z]/) || (arr[i-1].match(/[a-z]/) && arr[i].match(/[A-Z]/))) {
      newArr.push('-');
    } 
    if (arr[i].match(/[A-Za-z]/)) {
      newArr.push(arr[i].toLowerCase());
    }
  }
  return newArr.join('');
}
spinalCase('This Is Spinal Tap');

// 265: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers
// that are less than or equal to num.
function sumFibs(num) {
  let oddSum = 2;
  let a = 0;
  let b = 1;
  let c = 1;
  while (c <= num) {
    a = b;
    b = c;
    c += a;
    if (c % 2 === 1 && c <= num) {
      oddSum += c;
    }
  }
  return oddSum;
}
sumFibs(1000);

// 266: Sum All Primes
// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  let simpleSums = [0, 0, 2, 5, 5];
  if (num < 5) {
    return simpleSums[num];
  }
  // The following approach employs my observartion I need only test the
  // primes that have already been found as divisors to the 
  // isThisNumPrime variable.
  let primesFound = [3]; // not including 2 because iterator will never be even
  let primesFoundSum = 5;
  for (let isThisNumPrime = 5; isThisNumPrime <= num; isThisNumPrime += 2) {
    let possiblyPrime = true;
    // NOTE: The inner loop can likely be further reduced to only testing those
    // primes that are less than the square-root of num, but I will leave this 
    // factoring to a later date.
    for (let i = 0; i < primesFound.length; i++) {
      if (isThisNumPrime % primesFound[i] === 0) {
        possiblyPrime = false;
        break;
      }
    }
    if (possiblyPrime) {
      primesFound.push(isThisNumPrime);
      primesFoundSum += isThisNumPrime;
    }
  }
  return primesFoundSum;
}
sumPrimes(10);

// 267: Smallest Common Multiple -- THIS APPROACH CRASHED THE BROWSER - NO IDEA IF IT WORKS
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters. The range will be an 
// array of two numbers that will not necessarily be in numerical order.
function smallestCommons(arr) {
  let min = arr[0];
  let max = arr[1]; 
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0]; 
  }
  let product = min;
  for (let i = min + 1; i <= max; i++) {
    product *= i;
  }
  let numRange = {};
  for (let i = min; i <= product; i++) {
    numRange[i] = 0;
  }
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= product; j += i) {
      numRange[j]++;
    }
  }
  let numCount = max - min + 1;
  for (let i = min; i <= product; i++) {
    if (numRange[i] === numCount) {
      return i;
    }
  }
  return "Error";
}
smallestCommons([1, 13]);

// 267: Smallest Common Multiple - works
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters. The range will be an 
// array of two numbers that will not necessarily be in numerical order.
function smallestCommons(arr) {
  let min = arr[0];
  let max = arr[1]; 
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0]; 
  }
  let found = false;
  let iterationFailed = false;
  let smallestCommonMultiple = max;
  while (!found) {
    for (let i = min; i <= max; i++) {
      if (smallestCommonMultiple % i !== 0) {
        iterationFailed = true;
        break;
      }
    }
    if (iterationFailed) {
      iterationFailed = false;
      smallestCommonMultiple += max;
    } else {
      found = true;
      return smallestCommonMultiple;
    }
  }
}
smallestCommons([1, 5]);

// 268: Finders Keepers
// Create a function that looks through an array (first argument) and returns the
// first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
  return arr.find(func);
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

// 269: Drop It
// Drop the elements of an array (first argument), starting from the front, until the
// predicate (second argument) returns true.
function dropElements(arr, func) {
  let index = arr.findIndex(func);
  if (index === -1) {
    return [];
  } else {
    return arr.slice(index);
  }
}
dropElements([1, 2, 3], function(n) {return n < 3; });

// 270. Computer Basics - The 4 Basic Parts of a Computer
// Q1. The computer only has 3 basic parts. False. 4.
// Q2. CPU stands for Central Processing Unit. True
// Q3. All parts can access the memory. False. Only the CPU

// 271. Computer Basics - More Computer Hardware
// Q1. The power supply isn't a necessary part of a computer since it's not one of the 4 main parts. False.
// Q2. A motherboard connects all of the working parts in a computer. True.
// Q3. Memory is usually categorized into 3 parts. False.

// 272. Computer Basics - Chips and Moore's Law
// Q1. Chips have transistors, little switches that can store a 1 or a 0. True.
// Q2. Moore's Law is the observation that technology doubles in speed every year. False. Every two years.
// Q3. Moore's Law has slowed down in recent years. True.

// 273. Computer Basics - Intro to Binary Code
// Q1. 1's and 0's are how we talk about little switches being on and off. True.
// Q2. 1 means on, and 0 means off. True.
// Q3. There are some things which cannot be translated into binary. False.
  
// 274. Computer Basics - Decoding a Binary Number
// Q1. 1 == on and 0 == off. True.
// Q2. Not all numbers can be expressed through binary numeral notation. False.
// Q3. If we have the opportunity to include base 2 to every given power, we can create any number. True.

// 275. Computer Basics - Binary Bytes
// Q1. All digits, letters, and symbols have a binary byte translation. True (less than 255).
// Q2. It's good practice to memorize these. False.
// Q3. Everything can be expressed in binary, even pictures, sound, and video. True.

// 276. Computer Basics - How To Measure Data Size
// Q1. A Byte is the smallest possible amount of data. False.
// Q2. A bit is the smallest possible amount of data. True.
// Q3. A Kilobyte is 1024 Bytes. True.

// 277. Computer Basics - Measuring Data Speed
// Q1. Data speed is measured in bits per second. True.
// Q2. Data size is measured in bits. False.

// 278. Steamroller - passes FCC tests, but mixes order in edge cases, such as the one given.
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = arr.concat(arr[i]);
      arr[i] = null;
    }
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
steamrollArray([[["a"]], [["b"]], "c"]);

// 279. Binary Agents - first attempt (not working)
// Instead of returning "Aren't bonfires fun!?" I got Chinese symbols
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
  let translation = '';
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    translation += String.fromCharCode(parseInt(arr[i]));
  }
  return translation;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// 279. Binary Agents - working
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
  let translation = '';
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    translation += String.fromCharCode(parseInt(arr[i], 2));
  }
  return translation;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// 280. Computer Basics - Types of Computers
// Q1. The most common type of computer is a Personal Computer, a PC. True.
// Q2. What makes Supercomputers 'super' is when multiple CPUs work on one problem, called parallel processing. True.
// Q3. Microcontrollers and workstation computers can perform roughly the same tasks. False.

// 281. Computer Basics - More on the Motherboard
// Q1. A motherboard must connect the CPU, the memory, and the network. False.
// Q2. Expansion slots allow users to add capabilities to a computer. True.
// Q3. Ports help the computer access information. True.

// 282. Computer Basics - Data Networks
// Q1. You can connect to a LAN from far away. False.
// Q2. VPNs (Virtual Private Networks) and WANs (Wide Area Networks) do just about the same thing. True.
// Q3. VPNs and WANs both use the internet to connect LANs. False.

// 283. Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return (element[pre]);
  });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// 284. Computer Basics - IP Addresses
// Q1. IP addresses are necessary to use and participate in the internet. True.
// Q2. IP addresses are determined and assigned based on location. True.

// 285. Computer Basics - How the Internet Works
// Q1. Your computer sends a request for information. True.
// Q2. The Internet can be broken by a large chunk of routers and servers going down. False.

// 286. Computer Basics - Software
// Q1. Safari, Chrome, and Firefox are all examples of application software. True.

// 287. Project 1 - Tribute

// 288. Computer Basics - Content Delivery Networks
// Q1. Content Delivery Networks are a service you can buy through your internet service provider 
//   to increase your network connectivity. False.
// Q2. CDNs are popular and wide-reaching, and you've probably used one as a website user many 
//   times without even knowing it. The end result is that your experience was faster than it could 
//   have been without the CDNs services. True.

// 289. Computer Basics - Analog vs Digital and File Compression
// Q1. Digital files can be made from analog sounds and analog sounds can be made from digital files. True.
// Q2. Compression is not worth it, because it lessens quality. False.

// 290. Computer Basics - Routers and Packets
// Q1. Routers have to know the whole internet. False.
// Q2. Packets are little pieces of binary code. True.
// Q3. Packets have to be sent in one piece. False.

// 291. Computer Basics - Source Code
// Q1. Source code is a text document. True.
// Q2. JavaScript is a compiled language. False.
// Q3. Free Code Camp is open source. True.

// 292. Computer Basics - Console Log
// Q1. The console serves only small, unnecessary purposes. False.
// Q2. You can console strings (sets of words), numbers, and booleans (true/false statements). True.

// 293. Computer Basics - Variables In Code
// Q1. Variables are useful in coding languages like JavaScript. True.
// Q2. Variables can't stand for anything that isn't a string, number, or boolean. False.

// 294. Computer Basics - What Do Programmers Do?
// Q1. Computers look at code one line at a time. True.
// Q2. Programmers and developers are totally different professions with very little in common. False.
// Q3. Programmers take ideas and break them down into little tiny steps the computer can understand. True.

// 295. Project #2 - "Build a Random Quote Machine Complete" submitted

// 296. Computer Basics - Computer Security
// Q1. Passwords should be shared with all of your accounts. False.
// Q2. If you don't trust a site or an email, open a new browser and re-enter the intended location. True.
// Q3. Keeping software updated will help protect your computer and your information. True.

// 297. The DOM - What's the Document Object Model?
// Q1. The DOM is complex and difficult to access. False.
// Q2. The DOM is an API that is a part of the browser. True.

// 298. The DOM - Style in the Header, Script in the Footer
// Q1. Placing the style in the header and the script in the footer ensures the page is loaded for the user as you want it to appear. True.
// Q2. The CSS link should go in the header and the JS link should go in the footer. If you don't do it just that way, the webpage will crash. False.

// 299. JavaScript Lingo - MDN and Documentation
// Q1. Documentation is not a good way to learn a programming language. False.
// Q2. Mozilla Developer Network is a great resource that should be referenced regularly. True.

// 300. JavaScript Lingo - Value Types
// Q1. Numbers can include decimals. True.
// Q2. If a value is text that isn't the word true or false, it's a string. False.

// 301. JavaScript Lingo - Variables & camelCase
// Q1. camelCase is mandatory in JavaScript. False.
// Q2. Variables can only hold information that is a boolean, string, or number. False.

// 302. JavaScript Lingo - Arrays & Objects
// Q1. Arrays are easy to spot because of their [square brackets]. True.
// Q2. Objects in JavaScript are the same as objects in every other language. False.

// 303. JavaScript Lingo - Finding and Indexing Data in Arrays
// Q1. The first entry in array has the index of 1. False.
// Q2. Arrays must contain all of the same type of information, like booleans. False.

// 304. JavaScript Lingo - Manipulating Data
// Q1. Whenever there's a specific manipulation you want to apply, you should check the methods before writing your own code. True.
// Q2. When writing your own functions, you should keep your code clean by only using minimal amounts of methods. False.

// 305. JavaScript Lingo - Math
// Q1. When talking about Math in JavaScript, all of the methods and functions work like they would on any calculator. False.
// Q2. There are special methods and functions specific for the 'Math' object. True.

// 306. JavaScript Lingo - Loops
// Q1. There's only one type of loop. False.
// Q2. Loops can only traverse arrays. False.

// 307. JavaScript Lingo - Regular Expressions
// Q1. RegExp can be a useful tool when working with strings. True.
// Q2. RegExp can be intimidating, and if you don't like it, you can probably just avoid using it. False.

// 308. Chrome Dev Tools - Elements
// Q1. The elements tab is where you should go if you want to edit HTML and CSS of an existing web page. True.
// Q2. Any changes you make are saved, so it's safe to use as an editing tool. False.

// 309. Chrome Dev Tools: Network
// Q1. The Network tab is a good place to look to determine what requests are being made and how long they're taking. True.
// Q2. Like all of the tabs in Chrome Developer tools, there are many ways to view and utilize the information it offers. True.

// 310. Chrome Dev Tools: Sources
// Q1. Debugging can be done easily in the 'Sources' tab of Chrome Dev Tools. True.
// Q2. These breakpoints are already established, but you can edit where they are in the code. False.

// 311. Chrome Dev Tools: Timeline
// Q1. The 'Timeline' tab records how long it takes APIs to return information. False.
// Q2. You need to press 'record' to start capturing information when using the 'Timeline' tab. True.

// 312. Chrome Dev Tools: Profiles
// Q1. When you take a profile or a snapshot, the information that's collected will be viewable in only one format. False.
// Q2. After hitting 'record', consider refreshing the page depending on what data you are trying to capture. True.

// 313. Chrome Dev Tools: Resources
// Q1. The 'Resources' tab helps you view external resources such as SQL and cookies. True.

// 314. Chrome Dev Tools: Audits
// Q1. The Audit tab will suggest ways to improve a webpage. True.
// Q2. While you don't NEED to do everything suggested, you probably should. False.

// 315. Chrome Dev Tools: Console
// Q1. The console in Chrome Dev Tools has many similarities to the console of a computer. True.
// Q2. This video is in-depth and covers everything you need to know. False.


