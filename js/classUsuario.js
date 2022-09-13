export class Usuario{
    constructor(nombre, email, contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.administrador = false;
    }

    set modificarNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    set modificarEmail(emailNuevo){
        this.email = emailNuevo;
    }
    set modificarContrasenia(contraseniaNueva){
        this.contrasenia = contraseniaNueva;
    }

    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarEmail(){
        return this.email;
    }
    get mostrarAdministrador(){
        return this.administrador;
    }
}