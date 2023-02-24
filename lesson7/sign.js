import { emailArr } from "./script.js";


const emailSign = document.querySelector('#typeEmailS')
const passSign = document.querySelector('#typePasswordS');
const passSignVer = document.querySelector('#typePasswordSV')
const signBtn = document.querySelector('#btnSign')
const alertxt = document.querySelector('#alertTextS')


const creat = () => {
    if ((emailSign.value.includes("@")==true)&&(emailSign.value.includes(".")==true)&& ((jQuery.inArray(emailSign.value, emailArr))== -1)) {
        alertxt.innerHTML = "Account created successfully";
        alertxt.className = 'text-white-50 mb-5 bg-success'
        $('#body-texts').html('<h2 class="fw-bold mb-2 text-uppercase">Account registered!</h2> <button class="btn btn-outline-light btn-lg px-5" onclick="window.location.href=\'login.html\'" type="submit">Sign in</button>')

    } 
    else if((jQuery.inArray(emailSign.value, emailArr))!= -1) {
        alertxt.innerHTML = "This email has already been registered";
        alertxt.className = 'text-white-50 mb-5 bg-warning'
    }
    else{
        alertxt.innerHTML = "Email or password entered wrong";
        alertxt.className = 'text-white-50 mb-5 bg-danger'
    }


}




signBtn.addEventListener('click', creat)

