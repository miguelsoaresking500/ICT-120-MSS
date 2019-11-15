//Author: Miguel Soares
//Date:15.11.2019
//Title:Script page motivation
//version:1.0

document.addEventListener("DOMContentLoaded", init);

function init() {
    txtdescription.addEventListener("keyup", verifylength);
    Fname.addEventListener("keyup", FnameShow)
    // txtdescription.addEventListener("keyup",maxlenght);


}

//funtion qui nous permets de verifier la taille du text introduit dans la textarea
function verifylength() {
    var value = document.getElementById('txtdescription').value;
    if (value.length < 30) {
        divpasassez.classList.remove("d-none")
        divtrop.classList.add("d-none")
        return false; // keep form from submitting
    } else {
        divpasassez.classList.add("d-none")
        divtrop.classList.remove("d-none")
        cmdsubmit.classList.remove("d-none")
    }
    return true;
}

/* Malleuresement ce ci était la fontion pour compter combien de caractères nous restaient
function maxlenght() {
    var limiter = {
        allowed: 144, // Max. allowed characters
        counter: null, // Target word countering counter
        textarea: null, // Target textarea

        // INITIATE WORD COUNTER & LIMITER
        init: function (max, counter, textarea) {
            limiter.allowed = max;
            limiter.counter = counter;
            limiter.counter.innerHTML = limiter.allowed;
            limiter.textarea = textarea;
            limiter.textarea.setAttribute("maxlength", limiter.allowed);
            limiter.textarea.addEventListener("keyup", limiter.update);
            limiter.textarea.removeAttribute("disabled");
        },

        // UPDATE REMAINING WORD COUNT
        update: function (evt) {
            let remain = limiter.allowed - limiter.textarea.value.length;
            limiter.counter.innerHTML = remain;
        },

    }
}
*/

function FnameShow() {


    var mySubString = window.location.search(
        str.lastIndexOf("=") + 1,
        str.lastIndexOf("&")
    );
    var upcase = mySubString.toUpperCase();
    // put the value in the second box
    Fname.value = upcase;
}