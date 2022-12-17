// Assignment code here

function generatePassword() {
  // Get the length of the password from the user
  let length = window.prompt('Enter the length of the password (between 8 and 128 characters):');

  // Validate the password length
  while (length < 8 || length > 128) {
    alert('The password length must be between 8 and 128 characters. Please try again.');
    length = window.prompt('Enter the length of the password (between 8 and 128 characters):');
  }

  // Get the desired character types from the user
  let lowercase = window.confirm('Include lowercase letters in the password?');
  let uppercase = window.confirm('Include uppercase letters in the password?');
  let symbols = window.confirm('Include symbols in the password?');
  let numbers = window.confirm('Include numbers in the password?');


  // Validate that at least one character type is selected
  while (!uppercase && !symbols && !numbers && !lowercase) {
    alert('You must select at least one character type for the password. Please try again.');
    lowercase = window.confirm('Include lowercase letters in password?');
    uppercase = window.confirm('Include uppercase letters in the password?');
    symbols = window.confirm('Include symbols in the password?');
    numbers = window.confirm('Include numbers in the password?');

  }
  // Set up an array of characters to include in the password
  const chars = [];

  // Add lowercase letters
  if (lowercase) {
    for (let i = 97; i <= 122; i++) {
    chars.push(String.fromCharCode(i));
    }
  }

  // Add uppercase letters if requested
  if (uppercase) {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i));
    }
  }

  // Add symbols if requested
  if (symbols) {
    const symbolChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
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

  // Initialize a variable to track the number of each character type included in the password
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let symbolCount = 0;
  let numberCount = 0;

  // Generate the password by selecting random characters from the array
    while (password.length < length) {
      // Check if we have already included at least one of each character type
      // that the user selected
    if (lowercase && lowercaseCount === 0) {
      // Select a random lowercase letter
      const index = Math.floor(Math.random() * 26);
      password += String.fromCharCode(index + 97);
      lowercaseCount++;
      continue;
  }
  if (uppercase && uppercaseCount === 0) {
    // Select a random uppercase letter
    const index = Math.floor(Math.random() * 26);
    password += String.fromCharCode(index + 65);
    uppercaseCount++;
    continue;
  }
  if (symbols && symbolCount === 0) {
    // Select a random symbol
    const index = Math.floor(Math.random() * symbolChars.length);
    password += symbolChars.charAt(index);
    symbolCount++;
    continue;
  }
  if (numbers && numberCount === 0) {
    // Select a random number
    const index = Math.floor(Math.random() * 10);
    password += String.fromCharCode(index + 48);
    numberCount++;
    continue;
  }

  // If we have already included at least one of each character type
  // or if the user did not select that character type, select a random
  // character from the available character types
  const index = Math.floor(Math.random() * chars.length);
  password += chars[index];
}
  // Return the generated password
  return password;
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
