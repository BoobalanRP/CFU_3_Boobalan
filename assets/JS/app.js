
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)
  
document.getElementById("btn").addEventListener("click",function createPassword() {
    
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let patterns = "";
    if (uppercase) {
      patterns += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      patterns += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      patterns += "0123456789";
    }
    if (symbols) {
      patterns += "!@#$%^&*()_+";
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += patterns.charAt(Math.floor(Math.random() * patterns.length));
    }
    
    document.getElementById("password__result").value = password;
  }
)
 
  document.getElementById("btn").addEventListener("click", createPassword);

// let outputPassword = document.getElementById("length");
// let lengthCharacter = document.getElementById("result");
// let upperCase = document.getElementById('uppercase');
// let lowerCase = document.getElementById('lowercase');
// let numbers = document.getElementById('numbers');
// let symbols = document.getElementById('symbols');
// let generateButton = document.getElementById("btn");
// let value_uppercase = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";

// function checkLowercase() {
// return value_uppercase[Math.floor(Math.random() * value_uppercase.length)];
// }


// function generatePassword() {
// const len = lengthCharacter.value;
// let password = "";
// for (let i = 0; i < len; i++) {
// const x = generateX();
// password += x;
// }
// outputPassword.value = password;
// }

// function generateX() {
// const xs = [];
// if (upperCase.checked) {
// xs.push(value_uppercase[Math.floor(Math.random() * value_uppercase.length)].toUpperCase());
// }
// if (xs.length === 0) return "";
// return xs[Math.floor(Math.random() * xs.length)];
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// // const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
// const lowerCase =  characterCodes.map(code => String.fromCharCode(code));
// const upperCase = characterCodes.map(code => String.fromCharCode(code).toUpperCase());
