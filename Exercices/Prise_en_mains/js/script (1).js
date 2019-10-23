document.addEventListener('DOMContentLoaded', init)

function init() {
    bluetraced.addEventListener('click', Div1Click)
    clearDiv1.addEventListener('click', ClearDiv1)
    fontArial.addEventListener('mouseover', FontArial)
    fontArial.addEventListener('mouseleave', FontArial2)
    YESS.addEventListener('click', Yes)
    ciao.addEventListener('click', ClickText)
    nomprenom.addEventListener('keyup', Initiales)
    run.addEventListener('click', course)

}

function Div1Click() {
    bluetraced.style.backgroundColor = "lightblue"
    bluetraced.style.textDecoration = "line-through"
}

function ClearDiv1() {
    bluetraced.style.backgroundColor = "white"
    bluetraced.style.textDecoration = "none"
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
    if (ciao.click) {
        document.getElementById("caput").style.display = "none";
    }
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

function course() {

    if(ready.click){
        document.getElementById("set").disabled = false;
        document.getElementById("ready").disabled = true;
        document.getElementById("imgready").style.visibility="block";
    }
    if(set.click) {
        document.getElementById("set").disabled = true;
        document.getElementById("go").disabled = false;
        document.getElementById("go").style.visibility="block";
    }
}

