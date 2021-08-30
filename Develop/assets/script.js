// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_-+={}[]|><";
var pswd = "";
function generatePassword () {
  var LengthPrompt = window.prompt("Password Length?(8-128)");
  var pswdLength = parseInt(LengthPrompt);
  if (pswdLength >= 8 && pswdLength <= 128) {
    var lowC = window.prompt("Lower Case?(Y/N)");
    var l = lowC.toLowerCase();
    var upperC = window.prompt("Upper Case?(Y/N)");
    var u = upperC.toLowerCase();
    var numCh = window.prompt("Numbers?(Y/N)");
    var n = numCh.toLowerCase();
    var symCh = window.prompt("Symbols?(Y/N)");
    var s = symCh.toLowerCase();
    count = 0;
    while (count != length);
    count++;
    // L === Yes
    if (l === "y") {
      console.log("1L=Y");
      if (u === "y") {
        console.log("1U=Y");
        if (n === "y") {
          console.log("1N=Y");
          if (s === "y") {
            console.log("1S=Y");
            for (i=0;i<pswdLength;i++) {
              var yYYY = Math.floor(Math.random()*4);
              if (yYYY == 0) {
                lowCase();
                
              }
              else if (yYYY == 1) {
                upperCase();
                
              }
              else if (yYYY == 2) {
                numChar();
                
              }
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          //All Yes Above
          else if (s === "n") {
            console.log("1S=N");
            for (i=0;i<pswdLength;i++) {
              var yYYN = Math.floor(Math.random()*3);
              if (yYYN == 0) {
                lowCase();
                
              }
              else if (yYYN == 1) {
                upperCase();
                
              }
              else {
                numChar();
                
              }
              
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else {
            return symCh;
          }
        }
        else if (n === "n") {
          console.log("1N=N");
          if (s === "y") {
            console.log("2S=Y");
            
          }
          else if (s === "n") {
            console.log("2S=N");
            for (i=0;i<pswdLength;i++) {
              var yYNN = Math.floor(Math.random()*2);
              if (yYNN == 0) {
                lowCase();
                
              }
              else {
                upperCase();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else {
            return symCh;
          }
        }
        else {
          return numCh;
        }
      }
      else if (u === "n") {
        console.log("1U=N");
        if (n === "y") {
          console.log("2N=N");
          if (s === "y") {
            console.log("3S=Y");
            for (i=0;i<pswdLength;i++) {
              var yNYY = Math.floor(Math.random()*3);
              if (yNYY == 0) {
                lowCase();
                
              }
              else if (yNYY == 1){
                numChar();
                
              }
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else if (s === "n") {
            console.log("3S=N");
            for (i=0;i<pswdLength;i++) {
              var yNYN = Math.floor(Math.random()*2);
              if (yNYN == 0) {
                lowCase();
                
              }
              
              else {
                numChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else {
            return symCh;
          }
        }
        else if (n === "n") {
          
          if (s === "y") {
            for (i=0;i<pswdLength;i++) {
              var yNNY = Math.floor(Math.random()*2);
              if (yNYN == 0) {
                lowCase();
                
              }
              
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");

          }
          else if (s === "n") {
            for (i=0;i<pswdLength;i++) {
              lowCase();
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");

          }
          else {
            return symCh;
          }
        }
        else {
          return numCh;
        }
      }
      else {
        return upperC;
      }
    }
    // L === No
    else if (l === "n") {
      console.log("1L=N");
      if (u === "y") {
        console.log("1L=Y");
        if (n === "y") {
          console.log("1L=Y");
          if (s === "y") {
            console.log("1L=Y");
            for (i=0;i<pswdLength;i++) {
              var nYYY = Math.floor(Math.random()*3);
              if (nYYY == 0) {
                upperCase();
                
              }
              else if (nYYY == 1) {
                numChar();
                
              }
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else if (s === "n") {
            console.log("1L=Y");
            for (i=0;i<pswdLength;i++) {
              var nYYN = Math.floor(Math.random()*2);
              if (nYYN == 0) {
                upperCase();
                
              }
              
              else {
                numChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");

          }
          else {
            return symCh;
          }
        }
        else if (n === "n") {
          
          if (s === "y") {
            
            for (i=0;i<pswdLength;i++) {
              var nYNY = Math.floor(Math.random()*2);
              if (nYNY == 0) {
                upperCase();
                
              }
              
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else if (s === "n") {
            console.log("1L=Y");
            for (i=0;i<pswdLength;i++) {
              upperCase();
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
          }
          else {
            return symCh;
          }
        }
        else {
          return numCh;
        }
      }
      else if (u === "n") {
        
        if (n === "y") {
          
          if (s === "y") {
            
            for (i=0;i<pswdLength;i++) {
              var nNYY = Math.floor(Math.random()*2);
              if (nNYY == 0) {
                numChar();
                
              }
              
              else {
                symChar();
                
              }
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");

          }
          else if (s === "n") {
            for (i=0;i<pswdLength;i++) {
              numChar();
              
            }
            window.alert(pswd + " Refresh screen to generate a new password!");

          }
          else {
            return symCh;
          }
        }
        else if (n === "n") {
          
          if (s === "y") {
            for (i=0;i<pswdLength;i++) {
              symChar();
            }
            window.alert(pswd + " Refresh screen to generate a new password!");
            

          }
          else if (s === "n") {
            console.log("1L=Y");
            return generatePassword();

          }
          else {
            return symCh;
          }
        }
        else {
          return numCh;
        }
      }
      else {
        return upperC;
      }
    }
    // L === nothing
    else {
      return lowC;
    }
 
  }
  else {
    console.log("Return Length");
    return generatePassword();
  }
  
  
  
  
}
function lowCase() {
  console.log("Lower Case");
  pswd += letters.charAt(Math.floor(Math.random() * letters.length));
}
function upperCase() {
  console.log("Upper Case");
  var letrs = letters.charAt(Math.floor(Math.random() * letters.length));
  var upperLets = letrs.toUpperCase();
  pswd += upperLets
  
}
function numChar () {
  console.log("Numbers");
  pswd += numbers.charAt(Math.floor(Math.random() * numbers.length));

}
function symChar () {
  console.log("Symbols");
  pswd += symbols.charAt(Math.floor(Math.random() * symbols.length));
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
