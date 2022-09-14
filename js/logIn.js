import {buscarUsuario, buscarContrasenia, devolverUsuario} from "./helper.js";

const modalLogIn = new bootstrap.Modal(document.getElementById("modalInicioSesionIndex"));
const btnLogIn = document.getElementById("btnLogIn");
let usuarioLogIn = document.getElementById("usuario");
let contraseniaLogIn = document.getElementById("contrasenia");
let btnIniciar = document.getElementById("btnIniciar")

if(btnLogIn){
    btnLogIn.addEventListener("click", mostrarLogIn);
}
btnIniciar.addEventListener("submit", logIn);

function mostrarLogIn(){
    modalLogIn.show();
}

function logIn(){
    if(buscarUsuario(usuarioLogIn) && buscarContrasenia(usuarioLogIn, contraseniaLogIn)){
        console.log("hola")
        usuarioIniciado();
        modalLogIn.hide();
    }
}

function usuarioIniciado(){
    localStorage.setItem('UsuarioIniciadoStorage', JSON.stringify(devolverUsuario(usuarioLogIn)))
}