// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //initialise an empty array for the password
  var complexPassword = []
  //get a length between 9 and 15. some apps have a min pass length of 9 from experience 
  //longer than 15 would be too hard to remember
  var passwordLength = getRandomIntInclusive(9,15)

  //until we get to password length append a random char 
  for (let index = 0; index < passwordLength; index++) {
    complexPassword += randomCharacter()
  }

  //when finished return the pass
  return complexPassword
  
}

//this function is from mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  console.log("randomIntInclusive: " + randomInt)
  return randomInt;
}

function getRandomInt(max) {
  //this gets 0 an int in the range from 0 to max - 1. which works perfectly with arrays
  var randomInt = Math.floor(Math.random() * Math.floor(max));
  // console.log("randomInt: " + randomInt);
  return randomInt;
}

function randomCharacter() {
  //declare two arrays with available chars to use
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
  var special = ["$","@","&","*","^","!"];

  //generate a random int 0,1, or 2
  var num = getRandomInt(3);
  var char = "";

  //use the random int to pick either a lowercase alpha, upper alpha or special char
  if( num === 0)
  {
    //return a lowercase alphabet character
    //use array length so if the array changes we automatically include all the items
    char = alphabet[getRandomInt(alphabet.length)];
  } else if( num === 1) {
    //return an uppercase alphabet character
    char = alphabet[getRandomInt(alphabet.length)].toUpperCase();

  } else {
    //return a special character
    char = special[getRandomInt(special.length)];
  }
  // console.log("char: " + char);
  return char
}