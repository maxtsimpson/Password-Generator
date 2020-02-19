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


  

  var complexPassword = []
  var passwordLength = getRandomInt(26)

  for (let index = 0; index < passwordLength; index++) {
    complexPassword += randomCharacter()
  }

  var alphabetIndex = getRandomInt(26)
  var upperOrLower = getRandomInt(1)

  // let complexPassword = 

  return complexPassword
  
}

function getRandomInt(max) {
  var randomInt = Math.floor(Math.random() * Math.floor(max));
  console.log("randomInt: " + randomInt);
  return randomInt;
}

function randomCharacter() {
    
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
  var special = ["$","@","&","*","^","!"];

  var num = getRandomInt(3);
  var char = "";

  if( num === 0)
  {
    //return a lowercase alphabet character
    char = alphabet[getRandomInt(alphabet.length)];

  } else if( num === 1) {
    //return an uppercase alphabet character
    char = alphabet[getRandomInt(alphabet.length)].toUpperCase();

  } else {
    //return a special character

    char = special[getRandomInt(special.length)];

  }
  console.log("char: " + char);
  return char
}