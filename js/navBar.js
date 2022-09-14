let usuarioIniciado = JSON.parse(localStorage.getItem('UsuarioIniciadoStorage')) || "";
let liNombre = document.getElementById("liNombre");
let aNombre = document.getElementById("aNombre");
let liCarrito = document.getElementById("liCarrito");
let liLogOut = document.getElementById("liLogOut");
let liLogIn = document.getElementById("liLogIn");
let liRegistrar = document.getElementById("liRegistrar");
let liAdmin = document.getElementById("liAdmin");
let aAdmin = document.getElementById("aAdmin");

if(usuarioIniciado.administrador === true){
    usuarioAdmin();
} else if (usuarioIniciado.administrador === false){
    usuarioInvitado();
}

// function usuarioInvitado(){
    
// }

function usuarioAdmin(){
    liNombre.className = "nav-item mt-3 mb-2 me-2"
    aNombre.innerHTML = usuarioIniciado.nombre
    liLogOut.className = "nav-item"
    liAdmin.className = "nav-item"
    liLogIn.className = "ocultarNav"
    liRegistrar.className = "ocultarNav"
}

function usuarioInvitado(){
    liNombre.className = "nav-item mt-3 mb-2 me-2";
    aNombre.innerHTML = usuarioIniciado.nombre;
    liCarrito.className = "nav-item"
    liLogOut.className = "nav-item";
    liLogIn.className = "ocultarNav"
    liRegistrar.className = "ocultarNav"
}