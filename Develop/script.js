var characterLength = 16;
var choiceArr = [];

var specialCharArr =[" ! ", " ' ", " @ ", " % ", " * ",  " ^ ", " & ", " $ ", " # "];
var lowerCaseArr =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
var numArr =[" 1 "," 2 "," 3 "," 4 "," 5 "," 6 "," 7 "," 8 "," 9 "," 10 "];



// Assignment Code
var generateBtn = document.querySelector("#generate"); // This is the red button


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword); //This is where the red button is being used for click! It calls the writePassword Function

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();// There is no GeneratePassword Function. You gotta make it.
  var passwordText = document.querySelector("#password"); // Gererated Password displays on screen

  passwordText.value = password; // Handles Generate Password.

}

function generatePassword() {

}
