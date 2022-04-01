"use strict";

console.log("Made with 🔥 - Brian Bixby");

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

function charachterPrompt(charType) {
  let userAnswer = window.confirm(`Would you like to include ${charType} in your password?`);
  return userAnswer;
}

// ****  I kept the below commented out code in the repo on purpose  ****
// ****  I might change the confirmation questions to prompts in the future ****
// function charachterPrompt(charType, retry = false) {
//   let promptText = `Would you like to include ${charType} in your password? (yes/no)`;

//   if (retry) promptText = `Please try again, your last input was invalid. ${promptText}`;

//   let userAnswer = window.prompt(promptText, "yes");
//   if (userAnswer === null) return userAnswer;
//   userAnswer = userAnswer.trim().toLowerCase();
//   return userAnswer == "yes" ? true : userAnswer == "no" ? false : charachterPrompt(charType, true);
// }

function generatePassword() {
  // PROMPTS
  let length, lowercase, uppercase, numeric, specialChars;
  length = lengthPrompt();
  if (length === null) return '';
  lowercase = charachterPrompt("lowercase letters");
  uppercase = charachterPrompt("uppercase letters");
  numeric = charachterPrompt("numbers");
  specialChars = charachterPrompt("special charachters");
  if (!lowercase && !uppercase && !numeric && !specialChars) {
    let resubmit = window.confirm("At least one character type must be selected (lowercase, uppercase, numeric or special chachters). Please click okay if you would like to try again.");
    return resubmit ? generatePassword() : '';
  }
  // PASSWORD LOGIC
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharsArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
  var charachtersArray = [];
  var password = "";

  if (lowercase) {
    password += lowercaseArray[Math.floor(Math.random() * 26)];
    charachtersArray = [...lowercaseArray];
    length--;
  }
  if (uppercase) {
    password += uppercaseArray[Math.floor(Math.random() * 26)];
    charachtersArray = [...charachtersArray, ...uppercaseArray];
    length--;
  }
  if (numeric) {
    password += numericArray[Math.floor(Math.random() * 10)];
    charachtersArray = [...charachtersArray, ...numericArray];
    length--;
  }
  if (specialChars) {
    password += specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)];
    charachtersArray = [...charachtersArray, ...specialCharsArray];
    length--;
  }
  while (--length >= 0) {
    password += charachtersArray[Math.floor(Math.random() * charachtersArray.length)];
  }
  return password;
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
