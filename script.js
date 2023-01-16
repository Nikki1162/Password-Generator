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
  var pwdCriteria = prompt("Please select your required numbers of characters between 10 and 64");

  // Check validity of user choices
  var isValid = passwordLengthCheck(pwdLengthCheck);
  while(!isValid){
    pwdCriteria = prompt("Please ensure you choose between 10 and 64 characters. Try again!");
    isValid = passwordLengthCheck(pwdCriteria);
  }
  options["passwordLength"] = parseInt(pwdCriteria);

  // When a valid password length has been selected
  var pwdLengthCheck = populateOptions();
  while(!pwdLengthCheck){
    alert("Please ensure you select at least one characters type for your password. Try again!");
    pwdLengthCheck = populateOptions();
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
    function passwordLengthCheck(pwdCriteria){
      if(isNaN(pwdCriteria)){
        return false;
      }
        else if(pwdCriteria<10 || pwdCriteria>64){
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
    var chooseCharacters = [];

    if(passwordOptions.specialCharacters){
    chooseCharacters = chooseCharacters.concat(specialCharacters);
    }

    if(passwordOptions.numericCharacters){
    chooseCharacters = chooseCharacters.concat(numericCharacters);
    }

    if(passwordOptions.lowerCaseCharacters){
    chooseCharacters = chooseCharacters.concat(lowerCasedCharacters);
    }

    if(passwordOptions.upperCasedCharacters){
    chooseCharacters = chooseCharacters.concat(upperCasedCharacters);
    }

       // Create a for loop to loop over the array and select characters at random, adding characters to the string

   var password = "";
   var pwdLength = passwordOptions.passwordLength; 
   var optLength = chooseCharacters.length;
   for(var i = 0; i < pwdLength; i++){
    var randomCharSelect = Math.floor(Math.random()*optLength);
    password += chooseCharacters[randomCharSelect];
   }

   console.log(password);
   return password;
  }

  // Use query selector to reference generate password button
  var generateButton = document.querySelector('#generate');

  // Use query selector to populate the password box with user's randomly generated password
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');


  passwordText.value = password;
}

// Finally, add an event listener to the button in order to begin the process upon clicking the button
generateButton.addEventListener('click', writePassword);