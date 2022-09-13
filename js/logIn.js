const modalLogIn = new bootstrap.Modal(document.getElementById("modalInicioSesionIndex"));
const btnLogIn = document.getElementById("btnLogIn");

btnLogIn.addEventListener("click", mostrarLogIn);

function mostrarLogIn(){
    modalLogIn.show(); 
}