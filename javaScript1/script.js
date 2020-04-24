// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomChars = ""
var lengthInput = ""


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword = function() {
  //Prompt for password length
  var lengthInput = prompt("Your password must be between 8 and 128.");
    if(lengthInput < 8 || lengthInput > 128) {
      alert("Please select a number between 8 and 128.");
      generatePassword();
    };

    
    
  charTypes();

  //Randomizer
  var createdPassword = [];
  for(var i = 0; i < lengthInput; i++) {
    createdPassword[i] = randomChars[Math.floor(Math.random() * randomChars.length)];

    
    }

    return createdPassword.join('');
}

//Prompts that appears when generate password button is click 
var charTypes = function() {
  var charInput = window.confirm("Would you like to use uppercase characters?");
  if (charInput) {
    randomChars= randomChars+ elements.upperCase;
  }
  var charInput = window.confirm("Would you like to use lowercase characters?");
  if (charInput) {
    randomChars = randomChars + elements.lowerCase;
  }
  var charInput = window.confirm("Would you like to use numbers?");
  if (charInput) {
    randomChars = randomChars + elements.number;
  }
  var charInput = window.confirm("Would you like to use symbols?")
  if (charInput) {
    randomChars = randomChars + elements.symbol;
  }
  if (randomChars === "" || randomChars === null ) {
    window.alert("You must choose at least one character type.");
    charTypes();
  }
};  

//character object
var elements= {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  spsymbol: "\"!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"
};









