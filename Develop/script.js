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
  
  //prompt the user for the length of the password
  passwordLength = promptForPasswordLength();
  

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

function promptForPasswordLength(){

  var invalidInput = true;

  while(invalidInput) {
    
      var passwordLengthString = parseInt(prompt("how long would you like your password?\r\n enter a number between 8 and 128"));

      console.log("passwordLength: " + passwordLengthString);

      //decided to check for bogus values and use continue
      // rather than have a lot of nested if statements. i think this is simpler and more efficient
      if(!Number.isInteger(passwordLengthString))
      {
          // console.log("the password length must be an integer (whole number) i.e. 10 or 42");
          alert("the password length must be an integer (whole number)");
          continue;
      }

      if(passwordLengthString < 8){
          // console.log("the password length must be at least 8");
          alert("the password length must be at least 8")
          continue;
      }

      if(passwordLengthString > 128){
          // console.log("the password length cannot be greater than 128");
          alert("the password length cannot be greater than 128")
          continue;
      }

      //the input has passed checks and must be valid. therefore invalid is false
      invalidInput = false;
      passwordLength = passwordLengthString;
  }

  return passwordLength;

}