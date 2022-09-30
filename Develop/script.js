// Assignment code here
// Prompt for length of password 8-128
// Prompt for lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// Password is generated that matches the selected criteria
// Return password
function generatePassword() {
  var length = prompt("Character length of password: (Min:8 Max:128)");
  var lowerCase = confirm("Include lowercase characters?");
  var upperCase = confirm("Include Uppercase characters?");
  var numeric = confirm("Include Numeric characters?");
  var special = confirm("Include and/or special characters?");
  var i = 1;
  var password = [];

  while(i <= length) {
    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
    var ranArray = [];
    if(lowerCase) {
      ranArray = ranArray.concat(lowerCaseArray);
    }
    if(upperCase) {
      ranArray = ranArray.concat(upperCaseArray);
    }
    console.log(ranArray[Math.floor(Math.random() * ranArray.length)]);
    
    i++; 
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = generatePassword()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);