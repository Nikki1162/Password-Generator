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

// Write a function to check the user input is made up of valid options
    function passwordLengthCheck(numChars){
      if(isNaN(numChars)){
        return false;
      }
        else if(numChars<10 || numChars>64){
          return false; 
          }
          else{
            return true;
          }
      } 

// Function to generate password with user input
  function generatePassword() {

    var passwordOptions = getPasswordOptions();

    // Write an array with options to select characters at random
    var characterChoices = [];

    if(passwordOptions.specialCharacters){
    characterChoices = characterChoices.concat(specialCharacters);
    }

    if(passwordOptions.numericCharacters){
    characterChoices = characterChoices.concat(numericCharacters);
    }

    if(passwordOptions.lowerCaseCharacters){
    characterChoices = characterChoices.concat(lowerCasedCharacters);
    }

    if(passwordOptions.upperCasedCharacters){
    characterChoices = characterChoices.concat(upperCasedCharacters);
    }

       // Create a for loop to loop over the array and select characters at random, adding characters to the string

   var password = "";
   var pwdLength = passwordOptions.passwordLength; 
   var optLength = characterChoices.length;
   for(var i = 0; i < pwdLength; i++){
    var randomCharSelect = Math.floor(Math.random()*optLength);
    password += characterChoices[randomCharSelect];
   }

   console.log(password);
   return password;
  }

  var generateBtn = document.querySelector('#generate');

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');