"use strict";

console.log("Made with 💩 - Brian Bixby");

function lengthPrompt(retry = false) {
  let length;
  const promptText = "Choose a password length of at least 8 characters and no more than 128 characters."
  if (retry) {
    length = window.prompt(`Please try again, your last input was invalid. ${promptText}`, "8");
  } else {
    length = window.prompt(promptText, "8");
  }
  if (length === null) return length;
  if (!parseInt(length) || parseInt(length) < 8 || parseInt(length) > 128) {
    return lengthPrompt(true)
  } else {
    return parseInt(length);
  }
}

function charachterPrompt(charType, retry = false) {
  let promptText = `Would you like to include ${charType} in your password? (yes/no)`;

  if (retry) promptText = `Please try again, your last input was invalid. ${promptText}`;

  let userAnswer = window.prompt(promptText, "yes");
  if (userAnswer === null) return userAnswer;
  userAnswer = userAnswer.trim().toLowerCase();
  return userAnswer == "yes" ? true : userAnswer == "no" ? false : charachterPrompt(charType, true);
  // return (userAnswer !== "yes" && userAnswer !== "no") ? charachterPrompt(charType, true) : userAnswer;
}

function generatePassword() {
  //TODO: your code goes here
  let length, lowercase, uppercase, numeric, specialChars, resubmit;
  length = lengthPrompt();
  if (length === null) return '';
  lowercase = charachterPrompt("lowercase letters");
  if (lowercase === null) return '';
  uppercase = charachterPrompt("uppercase letters");
  if (uppercase === null) return '';
  numeric = charachterPrompt("numbers");
  if (numeric === null) return '';
  specialChars = charachterPrompt("special charachters");
  if (specialChars === null) return '';
  console.log("length:", length, "lowercase:", lowercase, "uppercase:", uppercase, "numeric:", numeric, "specialChars:", specialChars);
  if (!lowercase && !uppercase && !numeric && !specialChars) {
    resubmit = window.confirm("At least one character type must be selected (lowercase, uppercase, numeric or special chachters). Please click okay if you would like to try again.");
    console.log("resubmit: ", resubmit);
    return resubmit ? generatePassword() : '';
  }
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

// generating returned password
