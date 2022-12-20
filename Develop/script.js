// Assignment code here

function generatePassword() {
  // Get the length of the password from the user
  let length = window.prompt('Enter the length of the password (between 8 and 128 characters):');

  // Validate the password length
  if (length < 8 || length > 128) {
    alert('The password length must be between 8 and 128 characters. Please try again.');
    length = window.prompt('Enter the length of the password (between 8 and 128 characters):');
  }

  // Get the desired character types from the user
  let lowercase = window.confirm('Include lowercase letters in the password?');
  let uppercase = window.confirm('Include uppercase letters in the password?');
  let symbols = window.confirm('Include symbols in the password?');
  let numbers = window.confirm('Include numbers in the password?');


  // Validate that at least one character type is selected
  if (!uppercase && !symbols && !numbers && !lowercase) {
    alert('You must select at least one character type for the password. Please try again.');
    lowercase = window.confirm('Include lowercase letters in password?');
    uppercase = window.confirm('Include uppercase letters in the password?');
    symbols = window.confirm('Include symbols in the password?');
    numbers = window.confirm('Include numbers in the password?');

  }
  // Set up an array of characters to include in the password
  let chars = [];
  const gauranteedChars = [];
  let criteriaCount = 0;
  const symbolChars = ["!", "\\", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (lowercase) {
    gauranteedChars.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    chars = chars.concat(lowercaseChars);
    criteriaCount++;
  }
  if (uppercase) {
    gauranteedChars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    chars = chars.concat(uppercaseChars);
    criteriaCount++;
  }
  if (symbols) {
    gauranteedChars.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    chars = chars.concat(symbolChars);
    criteriaCount++;
  }

  if (numbers) {
    gauranteedChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    chars = chars.concat(numberChars);
    criteriaCount++;
  }


  console.log(chars);

  let remainingPasswordCount = length - criteriaCount
  console.log(remainingPasswordCount);

  for (i = 0; i < remainingPasswordCount; i++) {
    gauranteedChars.push(chars[Math.floor(Math.random() * chars.length)]);
  }

  console.log(gauranteedChars);
  console.log(gauranteedChars.join(""));


  //Return the generated password
  return gauranteedChars.join("");
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
