document.addEventListener("DOMContentLoaded", init);

function init() {
    cmdadd.addEventListener("click",adduser);
    cmddelete.addEventListener("click",usrdelete);
    cmdedit._addEventListeners("click",usredit)
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
    td10 = document.createElement('input')


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

    tblBody.appendChild(tr)
}

function usrdelete() {
    tr.removeChild(th)
    tr.removeChild(td1)
    tr.removeChild(td2)
    tr.removeChild(td3)
    tr.removeChild(td4)
    tr.removeChild(td5)
    tr.removeChild(td6)
    tr.removeChild(td7)
    tr.removeChild(td8)
    tr.removeChild(td9)

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