// VALIDACIONES FORMULARIO

export function validarNombre(input){
   if(input.value.length >= 3 && input.value.length <= 50){
    input.className = 'form-control bg-dark text-light is-valid';
    return true;
} else {
    input.className = 'form-control bg-dark text-light is-invalid';
    return false;
}
}

export function validarImagen (input){
    let imagen = /^(ftp|http|https):\/\/[^ "]+$/;
    if(imagen.test(input.value)){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    }else{
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

export function validarPrecio(input){
    let precio = /^[0-9]{3,5}$/;
    if(precio.test(input.value)){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    } else {
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

export function validarDescripcion(input){
 
    if(input.value.trim().length <= 200 && input.value.trim().length >= 30){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    }else{
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

export function validarCategoria(opcion){
    if(opcion.value.trim().length > 0){
        opcion.className = "form-control bg-dark text-light is-valid";
        return true;
    } else {
        opcion.className = "form-control bg-dark text-light is-invalid";
        return false;
    }
}

export function validarCantidad(input){
    let cantidad = /^[0-9]{1,3}$/;
    if(cantidad.test(input.value)){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    } else {
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

// VALIDACIONES FORMULARIO DE REGISTRO

export function validarNombreUsuario(input){
    if(input.value.length >= 5 && input.value.length <= 20){
     input.className = 'form-control bg-dark text-light is-valid';
     return true;
 } else {
     input.className = 'form-control bg-dark text-light is-invalid';
     return false;
 }
 }

export function validarEmail(input){
    let emailIngresado = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(emailIngresado.test(input.value)){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    } else {
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

export function validarContraseniaRegistrada(input){
    if(input.value.length >= 8){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    } else {
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}

export function validarContraseniaConfirmar(input, password){
    if(input.value === password.value){
        input.className = 'form-control bg-dark text-light is-valid';
        return true;
    } else {
        input.className = 'form-control bg-dark text-light is-invalid';
        return false;
    }
}