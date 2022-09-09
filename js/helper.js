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
    if(input.value.length <= 200 && input.value.length >= 30){
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