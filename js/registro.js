import { Usuario } from "./classUsuario.js";
import { validarNombreUsuario, validarEmail, validarContraseniaRegistrada, validarContraseniaConfirmar} from "./helper.js"

let listaUsuarios = []

const modalRegistro = new bootstrap.Modal(document.getElementById("modalRegistrarse"));
const btnRegistrarse = document.getElementById("btnRegistrarse");
let nombreUsuario = document.getElementById("nombreUsuario")
let email = document.getElementById("email")
let contraseniaRegistro = document.getElementById("contraseniaRegistro")
let contraseniaConfirmar = document.getElementById("contraseniaConfirmar")

btnRegistrarse.addEventListener("click", showForm);
nombreUsuario.addEventListener("blur", () => {validarNombreUsuario(nombreUsuario)});
email.addEventListener("blur", () => {validarEmail(email)});
contraseniaRegistro.addEventListener("blur", () => {validarContraseniaRegistrada(contraseniaRegistro)}); 
contraseniaConfirmar.addEventListener("blur", () => {validarContraseniaConfirmar(contraseniaConfirmar, contraseniaRegistro)}); 

function showForm(){
    modalRegistro.show()
}