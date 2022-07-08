//Storing Values with the Assignment Operator

// Setup
var a;
a = 7;
// Only change code below this line

// Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line

// Initializing Variables with the Assignment Operator
var a = 9

// Declare String Variables
var myFirstName = "Vladimir",
    myLastName = "Zvyagin";

// Understanding Uninitialized Variables
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Add Two Numbers with JavaScript
const sum = 10 + 10;

// Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
myVar++;

// Decrement a Number with JavaScript
let myVar = 11;

// Only change code below this line
myVar--;

// Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
// Only change code below this line
const myDecimal = 6.1

// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line

// Finding a Remainder in JavaScript
const remainder = 11 % 3;

//les 21
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//Compound Assignment With Augmented Subtraction

//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes

// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

// Concatenating Strings with Plus Operator
const myStr = "This is the start." +" " + "This is the end.";
let myStr = "This is the first sentence.";
myStr += " " + "This is the second sentence."

// Constructing Strings with Variables
const myName = "Vladimir";
const myStr = "My name is " + myName +" and I am well!";

// Appending Variables to Strings
const someAdjective = "123";
let myStr = "Learning to code is ";
myStr += someAdjective

// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0]

// Return a Value from a Function with Return
function timesFive (num) {
    return num*5
  }

//   Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)

// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


//   Counting Cards
  let count = 0;

function cc(card) {
  // Only change code below this line
  let bet = ' Bet';
  let hold = ' Hold'
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
    default:
    break;
  }

  if (count > 0) {
    return count + bet
  } else {
    return count + hold
  }
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// Build JavaScript Objects
const myDog = {
    name: 'BOBIK',
    legs: 4,
    tails: 1,
    friends: ['John', 'Peter']
};


// Accessing Object Properties with Dot Notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

//   Using Objects for Lookups
function phoneticLookup(val) {
    let result = "";
    let lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
    result = lookup[val]
    return result;
  }
  phoneticLookup("charlie");

  