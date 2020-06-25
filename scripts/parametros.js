const checkMulta = document.getElementById("checkMulta")
const textCheckMulta = document.getElementById("textCheckMulta")
const percent = document.getElementsByClassName("percent")

function changeMulta() {

    if (checkMulta.checked) {
        percent[0].disabled = false
        percent[1].disabled = false
        percent[2].disabled = false
        percent[3].disabled = false
        textCheckMulta.value = "Desabilitar"
    } else {
        percent[0].disabled = true
        percent[1].disabled = true
        percent[2].disabled = true
        percent[3].disabled = true
        textCheckMulta.value = "Habilitar"
    } 

}