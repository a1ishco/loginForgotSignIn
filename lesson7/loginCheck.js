import { emailArr, passArr } from "./script.js";

const inptEm = document.getElementById('typeEmailX'); // input email
const inptPas = document.getElementById('typePasswordX'); // input password
const logBtn = document.querySelector('#btnLog'); // login button
const alertxt = document.querySelector('#alertText') // text that shows login success or invalid password/login




const loger = () => {
    if ((jQuery.inArray(inptEm.value, emailArr) == jQuery.inArray(inptPas.value, passArr)) && jQuery.inArray(inptEm.value, emailArr) != -1) {
        alertxt.innerHTML = "Login Success";
        alertxt.className = 'text-white-50 mb-5 bg-success'
        $('#forgSpan').html('<button class="btn btn-outline-light btn-lg px-5" id="btnForgot" type="submit">CODE SENT</button>')
    }
    else {
        alertxt.innerHTML = "Email or password entered wrong";
        alertxt.className = 'text-white-50 mb-5 bg-danger'
    }
}

logBtn.addEventListener('click', loger)
