document.addEventListener('DOMContentLoaded', init)
function init() {
    usr.addEventListener("click", clickinput)
    pwd.addEventListener("click", clickinput)
}
    function clickinput(){
        document.getElementById('usr').value = "";
        document.getElementById('pwd').value = "";
    }




