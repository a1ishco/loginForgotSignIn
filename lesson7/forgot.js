import { emailArr } from "./script.js";

const inptEm = document.getElementById('typeEmailF');
const forgotBtn = document.querySelector('#btnForgot'); // login button
const alertxt = document.querySelector('#alertText')

const checkForgot = () => {
    if(jQuery.inArray(inptEm.value, emailArr)!= -1){
        alertxt.innerHTML = "Code for resetting password sent to email";
        alertxt.className = 'text-white-50 mb-5 bg-success'

    }
else{
    alertxt.innerHTML = "Email entered wrong";
    alertxt.className = 'text-white-50 mb-5 bg-danger'
}
}





forgotBtn.addEventListener('click', checkForgot)
