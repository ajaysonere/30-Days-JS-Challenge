const passwordValue = document.getElementById("password");
const button = document.getElementById("btn");
const copied = document.getElementById("copied");

const upperCase = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-=?\|><~{}[]";

const allCharacters = upperCase+lowerCase+number+symbol;


function generatePassword(){

    let password = "";
    const passwordLength = 12;
    password += upperCase[Math.floor(Math.random()*  upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * number.length )];

    while(password.length < passwordLength){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordValue.value = password;
    copied.style.display="none";
}

function copyPassword(){
    passwordValue.select();
    document.execCommand("copy");
    copied.style.display="block";
}

button.addEventListener("click" , generatePassword);