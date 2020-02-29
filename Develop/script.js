// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLettersCheck = document.querySelector("#lowercase-letters-checkbox");
var upperLettersCheck = document.querySelector("#uppercase-letters-checkbox");
var numbersCheck = document.querySelector("#numbers-checkbox");
var specialCharsCheck = document.querySelector("#special-checkbox");
var modalGenerateBtn = document.querySelector("#modal-generate-button");
var passwordLengthInput = document.querySelector("#password-length-input");
// var modal = document.querySelector("#password-options-modal");

// Write password to the #password input
function writePassword(passLength) {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var closeModal = function () {
  console.log("called closeModal");
  //this $(#id) syntax is from the bootstap site and i think uses jquery
  $("#password-options-modal").modal('hide');
}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//use let to make sure if the function isnt defined i get a compile error
let modalGenerate = function (){
  console.log("called modalGenerate")
  if (validPasswordOptions()) {
    console.log("the password options are valid");
    closeModal();
    writePassword(parseInt(passwordLengthInput.value));
    
  } else {
    console.log("the password options are NOT valid");
    promptToReEnterPassword();
  }
}

modalGenerateBtn.addEventListener("click", modalGenerate);

//vaildates password options and returns true or false
let validPasswordOptions = function (){
  
  console.log("validPasswordOptions");
  console.log(lowerLettersCheck);
  if(!(lowerLettersCheck.checked || upperLettersCheck.checked || numbersCheck.checked || specialCharsCheck.checked)){
    console.log("failed lowerLettersChecked");
    //at least one of the tickboxes must be ticked
    return false
    
  };

  var passLength = parseInt(passwordLengthInput.value);
  if (!(Number.isInteger(passLength) && passLength >= 8 && passLength <= 128)) {
    console.log("failed passLength");
    return false
  }
  //length should be specified and be a number
  return true;
}

//expect passwordLength to be an int and characterSetsToInclude to be an array of strings

let getCharacterSetsToInclude = function() {
  console.log("called getCharacterSetsToInclude");
  var characterSetsToInclude = [];
  if (lowerLettersCheck.checked)
  {
    characterSetsToInclude += "lowercaseAlpha";
  }
  
  if (upperLettersCheck.checked)
  {
    characterSetsToInclude += "uppercaseAlpha";
  }

  if (numbersCheck.checked)
  {
    characterSetsToInclude += "number";
  }

  if (specialCharsCheck.checked)
  {
    characterSetsToInclude += "special";
  }
  
  return characterSetsToInclude;
}

function generatePassword(passwordLength) {

  console.log("called generatePassword");
  var lowercaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
  var special = ["$","@","&","*","^","!"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var characterSetsToInclude = getCharacterSetsToInclude();

  //fun way of building uppercase alphabet array
  console.log("generating uppercase alphabet");
  var uppercaseAlphabet = [];
  lowercaseAlphabet.forEach(char => {
    // uppercaseAlphabet.append(char.toUpperCase())
    uppercaseAlphabet.push(char.toUpperCase())
  });

   //initialise an empty array for the password
   var complexPassword = []
   var arrayOfChars = []

  //check char sets to include. add the character set to the existing chars to pick from
  if (characterSetsToInclude.indexOf("lowercaseAlpha") != "-1"){
    arrayOfChars = arrayOfChars.concat(lowercaseAlphabet);
    //include at least one character from this array
    complexPassword += lowercaseAlphabet[getRandomInt(lowercaseAlphabet.length)]
  }

  if (characterSetsToInclude.indexOf("uppercaseAlpha") != "-1"){
    arrayOfChars = arrayOfChars.concat(uppercaseAlphabet);
    //include at least one character from this array
    complexPassword += uppercaseAlphabet[getRandomInt(uppercaseAlphabet.length)]
  }

  if (characterSetsToInclude.indexOf("number") != "-1"){
    arrayOfChars = arrayOfChars.concat(numbers);
    //include at least one character from this array
    complexPassword += numbers[getRandomInt(numbers.length)]
  }

  if (characterSetsToInclude.indexOf("special") != "-1"){
    arrayOfChars = arrayOfChars.concat(special);
    //include at least one character from this array
    complexPassword += special[getRandomInt(special.length)]
  }

  
  //prompt the user for the length of the password
  // passwordLength = promptForPasswordLength();


  //until we get to password length append a random char 
  for (let index = complexPassword.length; index < passwordLength; index++) {
    // complexPassword += randomCharacter()
    complexPassword += arrayOfChars[getRandomInt(arrayOfChars.length)]
  }

  //when finished return the pass
  return complexPassword
  
}

function validatePasswordOptions() {
    var lowercaseCheckbox = document.querySelector("#lowercase-letters-checkbox");
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

// a function to validate the form inputs and ask you to re-enter if they arent correct
function promptToReEnterPassword() {

  //at least one character set should be selected

  //password length must be between 8 and 128 chars


}

// //this uses some jquery. i've just played with jquery a little not used it everywhere
// $("#generate").button().on("click", function () {
//   //valid the password options
//   console.log("in generate click event")

  
// });