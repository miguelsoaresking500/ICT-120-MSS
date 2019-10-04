let bleu=document.getElementById(  'cssbleutrace');
let removecss=document.getElementById(  'removecss');
let changepoli1=document.getElementById( 'changepoli');
let YES=document.getElementById( 'YES');
let YESS=document.getElementById( 'YESS');
let yes1=document.getElementById( 'yes1');
let yes2=document.getElementById( 'yes2');

bleu.addEventListener( 'click', fnbleu);
removecss.addEventListener( 'click', fnremovecss);
changepoli1.addEventListener( 'mouseover',fnpolice);
changepoli1.addEventListener( 'mouseout',fnrpolice);


function fnbleu() {
    bleu.classList.add('cssbleutrace')
}

function fnremovecss() {
    bleu.classList.remove('cssbleutrace')
}

function fnpolice() {
    changepoli1.classList.add('changepoli')
}
function fnrpolice() {
    changepoli1.classList.remove('changepoli')
}

function fnyes(){
    if (yes1.checked===true && yes2.checked===true ){

        YES.style.display = "none"
        YESS.style.display = "block"
    }

}
