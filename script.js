// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersarray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numberarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharactersarray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharactersarray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function generatePassword() {
  var passwordlength = prompt("What is the length of your password?");
  console.log(passwordlength);
  if (passwordlength < 8) {
    alert("Please pick something greater than 8");
    return;
  }
  if (passwordlength > 128) {
    alert("Please pick something lower than 128");
    return;
  }
  var specialCharacters = confirm("Do you want to include special characters");
  console.log(specialCharacters);
  var lowerCasedCharacters = confirm("Do you want lowerCasedCharacters");
  var upperCasedCharacters = confirm("Do you want uppercasedcharacters");
  var numbers = confirm("Do you want numbers");

  function passwordCriteria() {
    var passwordLength = parseInt(
      prompt(
        "enter the number of characters you would like your password to contain"
      ),
      10
    );
    if (Number.isNaN(passwordLength)) {
      alert("enter the password length with numeric characters");
      return null;
    }
    if (passwordLength < 8) {
      alert("length of must be at least 8 characters");
      return null;
    }
    if (passwordLength > 128) {
      alert("length of password can be no more than 128 characters");
      return null;
    }
    var containsSpecialCharacters = confirm(
      "Hit OK to confirm the password should contain special character(s)"
    );
    var containsNumericCharacters = confirm(
      "Hit OK to confirm the password should contain numeric character(s)"
    );
    var containsLowerCaseCharacters = confirm(
      "Hit OK to confirm the password should contain lower case character(s)"
    );
    var containsUpperCaseCharacters = confirm(
      "Hit OK to confirm the password should contain upper case character(s)"
    );
    if (
      containsSpecialCharacters === false &&
      containsNumericCharacters === false &&
      containsLowerCaseCharacters === false &&
      containsUpperCaseCharacters === false
    ) {
      alert("At least one character type must be included");
      return null;
    }
    var options = {
      passwordLength: passwordLength,
      containsSpecialCharacters: containsSpecialCharacters,
      containsNumericCharacters: containsNumericCharacters,
      containsLowerCaseCharacters: containsLowerCaseCharacters,
      containsUpperCaseCharacters: containsUpperCaseCharacters,
    };
    return options;
  }
  var generateBtn = document.querySelector("#generate");
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  function generatePassword() {
    var options = passwordCriteria();
    var newPassword = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (!options) return null;
    if (options.containsSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if (options.containsNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
    if (options.containsLowerCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
      guaranteedCharacters.push(getRandom(lowercaseCharacters));
    }
    if (options.containsUpperCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
      guaranteedCharacters.push(getRandom(uppercaseCharacters));
    }
    for (var i = 0; i < options.passwordLength; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      newPassword.push(possibleCharacter);
    }
    for (var i = 0; i < guaranteedCharacters.passwordLength; i++) {
      newPassword[i] = guaranteedCharacters[i];
    }
    return newPassword.join("");
  }
  generateBtn.addEventListener("click", writePassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
