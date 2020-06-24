
const box = document.querySelector("#insertBox");
const saveConsulta = document.querySelector("#saveModal");

saveConsulta.addEventListener("click", () => {
    let professionalOnline = document.querySelector("#professionalOnline")
    let selectedProfessional = professionalOnline.options[professionalOnline.selectedIndex].text;

    box.innerHTML += ` <div class="row-box-dates bg-light">
                            <span class="text-body">10/01/2020 - 10:00 <br>
                            ${selectedProfessional}</span><a href=""><span><i class="far fa-thumbs-up text-success"></i><br>
                            <i class="far fa-thumbs-down text-danger mt-2"></i></span></a>
                        </div>`
    return teste();    
});