document.addEventListener("DOMContentLoaded", init);

function init() {
    cmdadd.addEventListener("click",adduser);
    cmddelete.addEventListener("click",usrdelete);
    cmdedit.addEventListener("click",usredit)
    cmdsave.addEventListener("click", usrsave)
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

    td10 = button


    button.type = "button";
    button.value = "X";
    button.id = "cmddelete";
    button.classList.add("btn-danger");
    button.classList.add("btn");




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
    table=td.parentNode
    table.removeChild(tr)


}

function usredit() {
    table =tblBody.children
    for(nbrow = 0; nbrow< tblBody.children.length; nbrow++)
    {
        row = tblBody.children[nbrow]

        for(nbcol = 0; nbcol< row.children.length; nbcol++)
        {
            cell = row.children[nbcol]
            inp= document.createElement('input')
            inp.type ='text'
            inp.value = cell.innerText;
            cell.innerText = ''

            cell.appendChild(inp)


        }

    }
    cmdadd.classList.add("d-none")
    cmdedit.classList.add("d-none")
    cmdsave.classList.remove("d-none")
}

function usrsave() {
    table =tblBody.children
    for(nbrow = 0; nbrow< tblBody.children.length; nbrow++)
    {
        row = tblBody.children[nbrow]

        for(nbcol = 0; nbcol< row.children.length; nbcol++)
        {
            cell = row.children[nbcol]
            cell.innerHTML = cell.firstChild.value


        }

    }
    cmdadd.classList.remove("d-none")
    cmdedit.classList.remove("d-none")
    cmdsave.classList.add("d-none")
}