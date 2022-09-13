import {buscarUsuario, buscarContrasenia} from "./helper.js";

const modalLogIn = new bootstrap.Modal(document.getElementById("modalInicioSesionIndex"));
const btnLogIn = document.getElementById("btnLogIn");
let usuarioLogIn = document.getElementById("usuario");
let contraseniaLogIn = document.getElementById("contrasenia");
let btnIniciar = document.getElementById("btnIniciar")

btnLogIn.addEventListener("click", mostrarLogIn);
btnIniciar.addEventListener("submit", logIn);

function mostrarLogIn(){
    modalLogIn.show();
}

function logIn(e){
    e.preventDefault();
    if(buscarUsuario(usuarioLogIn) && buscarContrasenia(usuarioLogIn, contraseniaLogIn)){
        console.log("hola")
    }
}