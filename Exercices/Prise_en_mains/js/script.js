let bleu=document.getElementById(  'cssbleutrace');
let removecss=document.getElementById(  'removecss');
let changepoli1=document.getElementById( 'changepoli');

bleu.addEventListener( 'click', fnbleu);
removecss.addEventListener( 'click', fnremovecss);
changepoli1=document.addEventListener( 'mouseover',fnpolice);
changepoli1=document.addEventListener( 'mouseout',fnrpolice);
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


