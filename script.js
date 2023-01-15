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

// Write a function prompting the user for their password choices
function getPasswordOptions() {

  // Store user choices
  var options = {};
  
  // Prompt the user to input their desired password length
  var numChars = prompt("Please select your required numbers of characters between 10 and 64");

  // Check validity of user choices
  var isValid = passwordLengthCheck(numChars);
  while(!isValid){
    numChars = prompt("Please ensure you choose between 10 and 64 characters. Try again!");
    isValid = passwordLengthCheck(numChars);
  }
  options["passwordLength"] = parseInt(numChars);

  // When a valid password length has been selected
  var isEnough = populateOptions();
  while(!isEnough){
    alert("Please ensure you select at least one characters type for your password. Try again!");
    isEnough = populateOptions();
  }

  console.log(options);

  function populateOptions(){
    options["specialCharacters"]= confirm("Do you want special characters in your password?");
    options["numericCharacters"]= confirm("Do you want numbers in your password?");
    options["lowerCasedCharacters"]= confirm("Do you want lower case characters in your password?");
    options["upperCasedCharacters"]= confirm("Do you want upper case characters in your password?");

        // If the user has made their character selections and they are valid

        var selectedOptions = Object.values(options);
        selectedOptions.shift();
        var isSelected = selectedOptions.some(function(checkSelected){
          return checkSelected;
        }); 
        return(isSelected);
      }
      return options;
    }