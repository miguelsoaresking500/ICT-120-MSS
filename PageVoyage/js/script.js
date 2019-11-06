document.addEventListener("DOMContentLoaded", init);

function init() {
    cmdadd.addEventListener("click",adduser);
    cmddelete.addEventListener("click",usrdelete);
    cmdedit.addEventListener("click",usredit)
}
function cache(){
    table.classList.remove("tab");
}


function adduser(){
    tr = document.createElement('tr')
    th = document.createElement('th')
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')
    td4 = document.createElement('td')
    td5 = document.createElement('td')
    td6 = document.createElement('td')
    td7 = document.createElement('td')
    td8 = document.createElement('td')
    td9 = document.createElement('td')
    td10 = document.createElement('td')

    var button = document.createElement('input')
    var button2 = document.createElement('input')
    td10 = button
    td11 = button2

    button.type = "button";
    button.value = "X";
    button.id = "cmddelete";
    button.classList.add("btn-danger");
    button.classList.add("btn");
    button2.type = "button";
    button2.value = "Éditer";
    button2.id = "cmdedit";
    button2.classList.add("btn-info");




    th.innerText = txtNum0.value;
    td1.innerText = txtNum1.value;
    td2.innerText = txtNum2.value;
    td3.innerText = txtNum3.value;
    td4.innerText = txtNum4.value;
    td5.innerText = txtNum5.value;
    td6.innerText = txtNum6.value;
    td7.innerText = txtNum7.value;
    td8.innerText = txtNum8.value;
    td9.innerText = txtNum9.value;
    td10.innerText=td10
    td11.innerText=td11

    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)
    tr.appendChild(td9)
    tr.appendChild(button)
    tr.appendChild(button2)


    tblBody.appendChild(tr)
}

function usrdelete(event) {
    button = event.target
    td = button.parentNode
    tr = td.button.parentNode
    tblBody=td.parentNode
    tblBody.removeChild(tr)


}

function usredit() {
    tr.replaceChild(th)
    tr.replaceChild(td1)
    tr.replaceChild(td2)
    tr.replaceChild(td3)
    tr.replaceChild(td4)
    tr.replaceChild(td5)
    tr.replaceChild(td6)
    tr.replaceChild(td7)
    tr.replaceChild(td8)
    tr.replaceChild(td9)

    tblBody.replaceChild(tr)
}