document.addEventListener('DOMContentLoaded', init)

function init() {


    cmdadd.addEventListener('click', Ajouter)


}


function Ajouter() {

    console.log()
    tr = document.createElement('tr')
    td1.innerText = txtName.value
    td1 = document.createElement('td')
    tr.appendChild(td1)
    tblBody.appendChild(tr)
}





