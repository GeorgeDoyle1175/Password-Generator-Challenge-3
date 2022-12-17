// Assignment code here
function generatePassword() {
  // Get the length of the password from the user
  const length = window.prompt('Enter the length of the password:');

  // Get the desired character types from the user
  const uppercase = window.confirm('Include uppercase letters in the password?');
  const symbols = window.confirm('Include symbols in the password?');
  const numbers = window.confirm('Include numbers in the password?');

  // Set up an array of characters to include in the password
  const chars = [];

  // Add lowercase letters
  for (let i = 97; i <= 122; i++) {
    chars.push(String.fromCharCode(i));
  }

  // Add uppercase letters if requested
  if (uppercase) {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i));
    }
  }

  // Add symbols if requested
  if (symbols) {
    const symbolChars = '!@#$%^&*(){}[]=<>,.';
    for (let i = 0; i < symbolChars.length; i++) {
      chars.push(symbolChars.charAt(i));
    }
  }

  // Add numbers if requested
  if (numbers) {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i));
    }
  }

  // Initialize the password as an empty string
  let password = '';

  // Generate the password by selecting random characters from the array
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  // Return the generated password
  return password;
}

const password = generatePassword();



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
