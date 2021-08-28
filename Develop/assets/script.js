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
    console.log("alien-spaceship");
    lowCase();
  } 
  else {
    console.log("garlic");
    return generatePassword();

  }
}
function lowCase() {
  var lowC = window.prompt(("Lower Case?(Y/N)").toLowerCase());
  if (lowC === "y") {
    console.log("bet");
  }
  else if (lowC === "n") {
    console.log("cheese");
  }
  else {
    console.log("Congress");
    return lowCase();
  }

}
function upperCase() {
  var upperC = window.prompt(("Upper Case?(Y/N)").toLowerCase());
  if (upperC === "y") {
    console.log("epic");
  }
  else if (upperC === "n") {
    console.log("lazers");
  }
  else {
    console.log("California");
    return upperC;
  }

}
function numbers() {

}
function symbols() {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
