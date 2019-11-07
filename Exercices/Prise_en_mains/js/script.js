document.addEventListener('DOMContentLoaded', init)

function init() {
    bluetraced.addEventListener('click', Div1Click)
    clearDiv1.addEventListener('click', ClearDiv1)
    fontArial.addEventListener('mouseover', FontArial)
    fontArial.addEventListener('mouseleave', FontArial2)
    yes1.addEventListener('click', Yes)
    yes2.addEventListener('click', Yes)
    ciao.addEventListener('click', ClickText)
    nomprenom.addEventListener('keyup', Initiales)
    ready.addEventListener('click', Ready)
    set.addEventListener('click', Set)
    go.addEventListener('click', Go)




}

function Div1Click() {
    bluetraced.classList.add("bleu");

}

function ClearDiv1() {
    bluetraced.classList.remove("bleu");
}

function FontArial() {
    fontArial.style.fontFamily = "arial"
}

function FontArial2() {
    fontArial.style.fontFamily = ""
}


function Yes() {
    if (yes1.checked && yes2.checked) {
        document.getElementById("YES").style.display = "none";
        document.getElementById("YESS").style.display = "block";
        YESS.style.backgroundColor = "green";
        YESS.style.color = "white";

    }
}

function ClickText() {

    document.getElementById("caput").remove();

}

function Initiales() {
    var espace = 0
    var longueur = " "
    var initiales = " "
    var initiales2 = " "
    var initiales3 = " "
    longueur = nomprenom.value.length
    espace = nomprenom.value.lastIndexOf(" ")
    initiales = nomprenom.value.substr(0, 1)
    initiales2 = nomprenom.value.substr(espace + 1, 1)
    initiales3 = nomprenom.value.substr(longueur - 1, 1)
    Initiales1.value = initiales.toUpperCase() + initiales2.toUpperCase() + initiales3.toUpperCase()
}

function Ready() {

    document.getElementById("imgempty").hidden=true;
    document.getElementById("ready").disabled = false;
    document.getElementById("set").disabled = false;
    document.getElementById("ready").disabled = true;
    document.getElementById("imgmarks").hidden=false;

}

function Set() {

    document.getElementById("imgmarks").hidden=true;
    document.getElementById("imgset").hidden = false;
    document.getElementById("set").disabled = true;
    document.getElementById("go").hidden = false;
    document.getElementById("go").style.visibility = "block";
    document.getElementById("imggo").hidden=true;

}
function Go() {
    document.getElementById("imgset").hidden = true;
    document.getElementById("imggo").hidden=false;
    document.getElementById("set").disabled = true;


    setTimeout(New,3000);




}
function New() {
    document.getElementById("imgset").hidden = true;
    document.getElementById("imggo").hidden=true;
    document.getElementById("imgempty").hidden=false;
    document.getElementById("ready").disabled = true;
    document.getElementById("go").hidden = true;
    document.getElementById("ready").disabled = false;



}


