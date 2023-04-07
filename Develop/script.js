// Created Variables for the password and also the lengnth of the password.

var characterLength = 25;
var choiceArr = []; // Defined at the bottom using concat

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
var cPrompts = getPrompts();// This variable will return true or false from the if statements down below.
var passwordText = document.querySelector("#password"); // Gererated Password displays on screen

//if Else statement.. if Correct P is true vs if False

if(cPrompts){
  var updatedPassword = generatePassword();// There is no GeneratePassword Function. You gotta make it. Will update after For loop runs
  passwordText.value = updatedPassword; // Handles Generate Password.
} else{
  passwordText.value = "";   // if the password does not meet the requirements, the Password test will return an empty string aka blank

}
}

function generatePassword() {  // Generate a password based on the prompts shown.
  var pass = ""; // Pass an empty variable (string) 
  for( var i = 0; i < characterLength; i++) {   // This for loops is going to keep looping until the charactherLength limit is hit. In my code it is 25
  var randomI = Math.floor(Math.random() * choiceArr.length);  // Declared a variable random which will generate random math numbers using the choiceArr using it's length. Math Floor will give an intiger from whatever the user inputs.

  password = password + choiceArr[randomI]; //between 0 and how many values are in choiceArr. Setting Password as choice Array

}

return password;  // This will return value to line 29 and generate Password for user

}

function getPrompts(){

  choiceArr =[];  // Resetting ChoiceArr to be an empty array because since code reads from top to bottom once this if statement below runs it wil reset the ChoiceArr!

characterLength =  parseInt(prompt("How many characters do you want your password to be? (needs to be 8 - 128 characters"));            //Promt to display the string for the user! 


if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {   // If statement stating if character is a string or less than 8 or greater than 128 characters, the statement will return false. the NaN is a non number functions that returns a boolean or makes it a number!

  alert("Character Length has to be a number, the Length needs to between 8 - 128 digits. Please try again!");

  return false;

}
  //If statements to use for each variable.

if (confirm("Would you like to utilize lowercase letters in your password?")) {       // Declaring a variable and concattinating lowercase variable.  Now choiceArray has lowerCaseArr values.
  choiceArr = choiceArr.concat(lowerCaseArr);          
}
  if (confirm("Would you like to utilize uppercase letters in your password?")) {     // Declaring a variable and concattinating uppercase variable.  Now choiceArray has upperCaseArr values.
    choiceArr = choiceArr.concat(upperCaseArr);     
  }
    if (confirm("Would you like to utilize numerical values in your password?")) {    // Declaring a variable and concattinating number array.  Now choiceArray has numberArr values.
      choiceArr = choiceArr.concat(numArr);   
    }
      if (confirm("Would you like to utilize special characters in your password?")) { // Declaring a variable and concattinating special characters variable.  Now choiceArray has specialCharacters values.
        choiceArr = choiceArr.concat(specialCharArr);  
return true;

      }
    }