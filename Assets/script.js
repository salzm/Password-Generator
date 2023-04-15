

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Declared Variables that will be used for password generator. This will be randomized

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", ".", "?", "<", ">"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var word = [""]; // This will contain the random genreator
function generatePassword() {

  //Prompt the user for the password criteria. Used if statements to make sure the variable and array works.

  var lowLetters = confirm("Would you like lowercase letters in your password?");
  if (lowLetters == true) {
    word = word.concat(lowerCase);
  }

var bigLetters = confirm("Would you like uppercase letters in your password?"); 
  if (bigLetters == true) {
    word = word.concat(upperCase);
  }

var numerals = confirm("Would you like any numbers in your password?");
  if (numerals == true) {
    word = word.concat(numbers);
  }

  var wordLength = prompt("How long do you want your password to be?");
    if (wordLength < 8 || wordLength > 128) {
      alert("Password must be between 8 - 128 characters.");
      return "Try again";
    } else {
      var length = wordLength
    }

  var characters = confirm("Would you like any special characters in your password?");
    if (characters == true) {
      word = word.concat(specialChar);
    }

  // Validate the input. At least one character type should be selected. Make sure the user answers the promots

  if (!lowLetters && !bigLetters && !numerals && !characters) {
    alert("You must choose at least one of the selections to generate password.");
    return "Please try again";
  }

  // Generate password based on criteria
  var password = [""]

  for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * word.length);
    password += word[random];
  }

  //Display password to the page my returining the password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

