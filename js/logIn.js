import {buscarUsuario, buscarContrasenia, devolverUsuario} from "./helper.js";

const modalLogIn = new bootstrap.Modal(document.getElementById("modalInicioSesionIndex"));
const btnLogIn = document.getElementById("btnLogIn");
const btnLogOut = document.getElementById("liLogOut");
let usuarioLogIn = document.getElementById("usuario");
let contraseniaLogIn = document.getElementById("contrasenia");
let btnIniciar = document.getElementById("btnIniciar")

btnIniciar.addEventListener("submit", logIn);
btnLogIn.addEventListener("click", mostrarLogIn);
btnLogOut.addEventListener("click", logOut);

function mostrarLogIn(){
    modalLogIn.show();
}

function logIn(){
    if(buscarUsuario(usuarioLogIn) && buscarContrasenia(usuarioLogIn, contraseniaLogIn)){
        usuarioIniciado();
        modalLogIn.hide();
    }
}

function usuarioIniciado(){
    localStorage.setItem('UsuarioIniciadoStorage', JSON.stringify(devolverUsuario(usuarioLogIn)))
}

function logOut(){
    localStorage.removeItem('UsuarioIniciadoStorage');
    location.reload();
}

