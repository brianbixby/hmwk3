"use strict";

var genButton = document.querySelector("#generate");

function generatePassword(){
  //TODO: your code goes here
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// assign variables
// snag button
// length
// lowercase array 
// uppercase array 
// numbers array 
// special chars array 

// prompts and storing response
// listen to the button 
// how long is password 
// lowercase? 
// uppercase? 
// numbers? 
// special chars?

// generating returned password