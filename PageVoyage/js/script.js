document.addEventListener('DOMContentLoaded', init)

function init() {
    usr.addEventListener('click', clickinput)
    pwd.addEventListener('click', clickinput)
    liste.addEventListener('click', clickliste)
    ajouter.addEventListener('click', clickajouter)
    supprimer.addEventListener('click', clicksupprimer)
    editer.addEventListener('click', clickediter)
}

function clickinput() {
    document.getElementById('usr').value = " ";
    document.getElementById('pwd').value = " ";
}

function clickliste() {
    Tablepersons.style.width = "60";
    document.getElementById('divchamps').display = "none";
}

function clickajouter() {

}

function clicksupprimer() {

}

function clickediter() {

}

