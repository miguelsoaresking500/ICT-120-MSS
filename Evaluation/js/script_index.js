//Author: Miguel Soares
//Date:15.11.2019
//Title:Script page index
//version:1.0

document.addEventListener("DOMContentLoaded", init);

function init() {

    txtFname.addEventListener("keyup", RequierdFname);
    txtLname.addEventListener("keyup", RequierdLname);
    cmdsubmit.addEventListener("click", insertName);
    txtPass.addEventListener("keyup", RequierdPassword);
    txtPassR.addEventListener("keyup", checkPassword);


}

//fonction qui nous oblige a remplir le champ First Name avec plus de 2 caractères
function RequierdFname() {

    var value = document.getElementById('txtFname').value;
    if (value.length < 2) {
        cmdsubmit.disabled = true;
        //dit a l'utilisateur ce qui va pas
        divinvalid1.classList.remove("d-none")
        return false;

    } else {
        //si tout est bien rempli
        divinvalid1.classList.add("d-none")
    }
    // else form is good let it submit, of course you will


    return true;
}

//fonction qui nous oblige a remplir le champ Last Name avec plus de 2 caractères

function RequierdLname() {

    var value = document.getElementById('txtLname').value;
    if (value.length < 2) {
        cmdsubmit.disabled = true;
        //dit a l'utilisateur ce qui va pas
        divinvalid2.classList.remove("d-none")
        return false;

    } else {
        //si tout est bien rempli
        divinvalid2.classList.add("d-none")
    }


    return true;
}

//fonction qui nous oblige a remplir la Password avec plus de 6 caractères

function RequierdPassword() {

    var value = document.getElementById('txtPass').value;
    if (value.length < 6) {
        cmdsubmit.disabled = true;
        //dit a l'utilisateur ce qui va pas
        divinvalidPw.classList.remove("d-none")
        return false;
    } else {
        //si tout est bien rempli
        divinvalidPw.classList.add("d-none")
    }


    return true;
}

//fonction qui nous nous oblige a avoir le meme password

function checkPassword(form) {
    var password = document.getElementById("txtPass").value;
    var confirmPassword = document.getElementById("txtPassR").value;

    if (password != confirmPassword) {
        cmdsubmit.disabled = true;
        //dit a l'utilisateur ce qui va pas
        divinvalidPw2.classList.remove("d-none")
        return false;
    }
    //si tout est bien rempli
    divinvalidPw2.classList.add("d-none")
    cmdsubmit.disabled = false;
    return true;
}


function insertName() {

}