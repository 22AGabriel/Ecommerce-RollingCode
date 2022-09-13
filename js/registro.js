import { Usuario } from "./classUsuario.js";
import { validarNombreUsuario, validarEmail, validarContraseniaRegistrada, validarContraseniaConfirmar} from "./helper.js"

let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosStorage')) || [];

const modalRegistro = new bootstrap.Modal(document.getElementById("modalRegistrarse"));
const btnRegistrarse = document.getElementById("btnRegistrarse");
let formularioRegistro = document.getElementById("btnRegistrar")
let nombreUsuario = document.getElementById("nombreUsuario")
let email = document.getElementById("email")
let contraseniaRegistro = document.getElementById("contraseniaRegistro")
let contraseniaConfirmar = document.getElementById("contraseniaConfirmar")

btnRegistrarse.addEventListener("click", showForm);
formularioRegistro.addEventListener('submit', registrarse);
nombreUsuario.addEventListener("blur", () => {validarNombreUsuario(nombreUsuario)});
email.addEventListener("blur", () => {validarEmail(email)});
contraseniaRegistro.addEventListener("blur", () => {validarContraseniaRegistrada(contraseniaRegistro)}); 
contraseniaConfirmar.addEventListener("blur", () => {validarContraseniaConfirmar(contraseniaConfirmar, contraseniaRegistro)}); 

function showForm(){
    modalRegistro.show()
}

function registrarse(e){
    e.preventDefault();
    if(validarNombreUsuario(nombreUsuario) === true && 
    validarEmail(email) && 
    validarContraseniaRegistrada(contraseniaRegistro) && 
    validarContraseniaConfirmar(contraseniaConfirmar, contraseniaRegistro)){
        let nuevoUsuario = new Usuario(
            nombreUsuario.value,
            email.value,
            contraseniaRegistro.value
        )
        listaUsuarios.push(nuevoUsuario)
        console.log(listaUsuarios)
        guardarUsuarioEnLocalStorage();
        limpiarFormulario();
        modalRegistro.hide();
    }
}

function guardarUsuarioEnLocalStorage(){
    localStorage.setItem('listaUsuariosStorage', JSON.stringify(listaUsuarios))
}

function limpiarFormulario(){
    formularioRegistro.reset();
    nombreUsuario.className = "form-control bg-dark text-light";
    email.className = "form-control bg-dark text-light";
    contraseniaRegistro.className = "form-control bg-dark text-light";
    contraseniaConfirmar.className = "form-control bg-dark text-light";
}


let administrador = new Usuario("Javier","javier@gmail.com", 12345678)

administrador.administrador = true

listaUsuarios.push(administrador)
guardarUsuarioEnLocalStorage()