// Array of special characters tto be included in the password
var specialCharacters = [
  // Array of special characters to be included in password
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Variable declaration
var confirmLength = '';
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;

// Function to prompt user for password options
function getPasswordOptions() {

}

// User selects password length
var confirmLength = (prompt("Please choose between 10 and 64 characters for your password"));
// If the answer falls outside of the specified criteria then loop back
while(confirmLength <=10 || confirmLength >=64) {
  alert("Password does not meet specified length requirement, please try again");
  // User enters password length again
  var confirmLength = (prompt("Please choose between 10 and 64 characters for your password"));
}
// Confirm choice of password length
alert("You have chosen " + confirmLength + " characters for your password");

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prompts for length, upper/lowercase, numbers, special characters
// Store prompts within a variable
// Validate password length is correct
// If correct, go to next prompt
// Otherwise, error message
// 