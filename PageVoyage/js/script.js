document.addEventListener("DOMContentLoaded", init);

function init() {
    cmdadd.addEventListener("click", adduser);
    cmddelete.addEventListener("click", usrdelete);
    cmdedit.addEventListener("click", usredit);
    cmdsave.addEventListener("click", usrsave);
    txtNum1.addEventListener("keyup", initiale);
    cmdshowless.addEventListener("click", hide);
    cmdshowmore.addEventListener("click", show);

}


function adduser() {
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

    td10 = button


    button.type = 'button';
    button.value = 'X';
    button.id = 'cmddelete';
    button.classList.add('btn-danger');
    button.classList.add("btn");
    button.addEventListener('click',usrdelete)


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
    td10.innerText = td10

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
    tblBody.appendChild(tr)


}

function usrdelete(event) {
    button = event.target
    td = button.parentNode
    tr = td.parentNode
    tblBody = tr.parentNode
    tblBody.removeChild(tr)


}

function usredit() {
    table = tblBody.children
    for (nbrow = 0; nbrow < tblBody.children.length; nbrow++) {
        row = tblBody.children[nbrow]

        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            inp = document.createElement('input')
            inp.type = 'text'
            inp.value = cell.innerText;
            cell.innerText = ''

            cell.appendChild(inp)


        }

    }
    cmdadd.classList.add("d-none")
    cmdedit.classList.add("d-none")
    cmdshowless.classList.add("d-none")
    cmdsave.classList.remove("d-none")
    tab1.classList.add("cacher");
}

function usrsave() {
    table = tblBody.children
    for (nbrow = 0; nbrow < tblBody.children.length; nbrow++) {
        row = tblBody.children[nbrow]

        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            cell.innerHTML = cell.firstChild.value


        }

    }
    cmdadd.classList.remove("d-none")
    cmdedit.classList.remove("d-none")
    cmdsave.classList.add("d-none")
    cmdshowless.classList.remove("d-none")
    tab1.classList.remove("cacher");

}

function hide() {

    cmdshowless.classList.add("d-none");
    cmdshowmore.classList.remove("d-none");


}

function show() {

    cmdshowless.classList.remove("d-none");
    cmdshowmore.classList.add("d-none");


}

function initiale() {

    var x = " ";
    //we meuser length of the name

    var long = txtNum1.value.length;
    //find where is the place exactly


    var espace = txtNum1.value.indexOf(x);
    //now we go slowly to take first letter
    var lettre1 = txtNum1.value.substr(0, 1);
    // find space between name and last name
    var lettre2 = txtNum1.value.substr(espace + 1, 1);
    // take last letter
    var lettre3 = txtNum1.value.substr(long - 1, 1);
    // concatenate together to make initialisation
    var resultat = lettre1 + lettre2 + lettre3;
    // all to upper case
    var upcase = resultat.toUpperCase();
    // put the value in the second box
    txtNum9.value = upcase;
}