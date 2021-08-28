// Assignment code here
var letters = [];
var numbers = [];
var special = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var lengthPrompt = window.prompt("Password Length?(8-128)");
  var length = parseInt(lengthPrompt);
  if (length >= 8 && length <= 128) {
    console.log(length);
    lowCase();
    upperCase();
    numChar();
    symChar();
  } 
  else {
    console.log("Return genPass");
    return generatePassword();

  }
}
function lowCase() {
  var lowC = window.prompt("Lower Case?(Y/N)");
  var l = lowC.toLowerCase();
  if (l === "y") {
    console.log("Yes lower");
  }
  else if (l === "n") {
    console.log("No lower");
  }
  else {
    console.log("Return lower");
    return lowCase();
  }

}
function upperCase() {
  var upperC = window.prompt("Upper Case?(Y/N)");
  var u = upperC.toLowerCase();
  if (u === "y") {
    console.log("Yes upper");
  }
  else if (u === "n") {
    console.log("No upper");
  }
  else {
    console.log("Return Upper");
    return upperCase();
  }

}
function numChar() {
  var numChoice = window.prompt("Numbers?(Y/N)");
  var n = numChoice.toLowerCase();
  if (n === "y") {
    console.log("Yes numbers");
  }
  else if (n === "n") {
    console.log("No numbers");
  }
  else {
    console.log("Return numbers");
    return numChar();
  }
}
function symChar() {
  var symChoice = window.prompt("Symbols?(Y/N)");
  var s = symChoice.toLowerCase();
  if (s === "y") {
    console.log("Yes symbols");

  }
  else if (s === "n") {
    console.log("No symbols");
  }
  else {
    console.log("Return symbols")
    return symChar();
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
