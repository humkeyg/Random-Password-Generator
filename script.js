// Assignment Code

//User input variables
var generateBtn = document.querySelector("#generate");
var enter;

var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmCharacters;

//Password input variables
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Variable for user selections
var choices;

//Begin creating functions here
var get = document.querySelector("#generate");

//add click function to the "generate password" button, create a shorthand "ps" for generate password and call the element from the HTML to be updated
get.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//Create a generate password function
function generatePassword() {
  enter = parseInt(prompt("How many characters do you want in your password? Choose an amount between 8 and 128."));
  if(!enter) {
    alert("Value required");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128."));
  } else {
    confirmUppercase = confirm("Include uppercase letters?");
    confirmLowercase = confirm("Include lowercase letters?");
    confirmNumbers = confirm("Include numbers?");
    confirmCharacters = confirm ("Include special characters?");
  };

  //for all empty options
  if(!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
    choices = alert("Please choose atleast one(1) criteria.");
  }

  //for all 4 options selected
  else if(confirmUppercase && confirmLowercase && confirmNumbers && confirmCharacters) {
    choices = upperCase.concat(lowerCase, numbers, characters);
  }

  //for 3 options selected, accounting for all different combinations
  else if(confirmUppercase && confirmLowercase && confirmNumbers) {
    choices = upperCase.concat(lowerCase, numbers);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacters) {
    choices = upperCase.concat(lowerCase, characters);
  }
  else if (confirmUppercase && confirmCharacters && confirmNumbers) {
    choices = upperCase.concat(characters, numbers);
  }
  else if (confirmLowercase && confirmCharacters && confirmNumbers) {
    choices = lowerCase.concat(characters, numbers);
  }

  // for 2 options selected
  else if (confirmUppercase && confirmLowercase) {
    choices = upperCase.concat(lowerCase);
  } 
  else if (confirmUppercase && confirmCharacters) {
    choices = upperCase.concat(characters);
  } 
  else if (confirmUppercase && confirmNumbers) {
    choices = upperCase.concat(numbers);
  } 
  else if (confirmLowercase && confirmCharacters) {
    choices = lowerCase.concat(characters);
  } 
  else if (confirmLowercase && confirmNumbers) {
    choices = lowerCase.concat(numbers);
  } 
  else if (confirmCharacters && confirmNumbers) {
    choices = characters.concat(numbers);
  }

  //for 1 option selected
  else if (confirmUppercase) {
    choices = upperCase;
  } 
  else if (confirmLowercase) {
    choices = lowerCase;
  }
  else if (confirmCharacters) {
    choices = characters;
  }
  else if (confirmNumbers) {
    choices = numbers;
  }

  // create variable to hold password array
  var password = [];

  //create random selection variables to randomize arrays
  for (var i=0; i<enter; i++) {
    var pickChoices = choices[Math.floor(Math.random()*choices.length)];
    password.push(pickChoices);
  }

  //convert password array into string and combine it
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

//put password variable into textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
