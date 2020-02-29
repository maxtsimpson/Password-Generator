function isValidPasswordLength(passwordLengthString){

    var invalidInput = true;

    while(invalidInput) {
        
        console.log("passwordLength: " + parseInt(passwordLengthString));
        //decided to check for bogus values and use continue
        // rather than have a lot of nested if statements. i think this is simpler and more efficient
        if(!Number.isInteger(parseInt(passwordLengthString)))
        {
            console.log("the password length must be an integer (whole number) i.e. 10 or 42");
            // alert("the password length must be an integer (whole number)");
            continue;
        }

        if(passwordLengthString < 8){
            console.log("the password length must be at least 8");
            // alert("the password length must be at least 8")
            continue;
        }

        if(passwordLengthString > 128){
            console.log("the password length cannot be greater than 128");
            // alert("the password length cannot be greater than 128")
            continue;
        }

        //the input has passed checks and must be valid. therefore invalid is false
        invalidInput = false;
    }

    return true;

}

function promptForPasswordCharacterSets(){

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


// var passwordLength = "abc";
// console.log(promptForPasswordCharacterSets("abc"));

console.log("Choose the character types you would like in your password." +
"\r\n Enter a comma list of your choices. the available choices are:" +
"\r\n lowercase" +
"\r\n uppercase" +
"\r\n 1:");


var fullSpecialCharSet = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]