import { Producto } from "./classProducto.js";
import {validarNombre, validarImagen, validarPrecio, validarDescripcion, validarCategoria, validarCantidad} from "./helper.js"

let listaProductos = JSON.parse(localStorage.getItem('listaProductosStorage')) || [];

const modalFormulario = new bootstrap.Modal(document.getElementById('modalAgregarProducto'));
const btnCrearProducto = document.getElementById('btnCrearProducto');
let formulario = document.getElementById('formProductos')
let codigo = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let precio = document.getElementById('precio');
let descripcion = document.getElementById('descripcion');
let categoria = document.getElementById('categoria');
let cantidad = document.getElementById('stock');
// variable para determinar si agregamos producto o editamos el producto
let productoNuevo = true // producto  nueva = true quiero crear un producto  caso contrario quiero editar  

btnCrearProducto.addEventListener('click', mostrarFormulario);
formulario.addEventListener('submit', agregarProducto);
nombre.addEventListener('blur', () => {validarNombre(nombre)});
imagen.addEventListener('blur', () => {validarImagen(imagen)});
precio.addEventListener('blur', () => {validarPrecio(precio)});
descripcion.addEventListener('blur', () => {validarDescripcion(descripcion)});
categoria.addEventListener('blur', () => {validarCategoria(categoria)});
cantidad.addEventListener('blur', () => {validarCantidad(cantidad)});

cargarProducto();

function cargarProducto(){
    if(listaProductos.length > 0){
      listaProductos.forEach(producto => {crearFila(producto)});
    }
}

function crearFila(producto){
    let tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML += `
    <tr>
    <td scope="row"><img class="w-100" src="${producto.imagen}" alt="${producto.nombre}"></td>
    <td>${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.categoria}</td>
    <td>${producto.cantidad}</td>
    <td>
        <button type="button" class="btn btn-outline-danger" onclick="borrarProducto('${producto.codigo}')">
            <i class="bi bi-trash-fill"></i>
        </button>
        <button type="button" class="btn btn-outline-warning mt-2" onclick="editarProducto('${(producto.codigo)}')">
            <i class="bi bi-pencil-square"></i>
        </button>
    </td>
 </tr>`
}

function mostrarFormulario(){
    productoNuevo = true;
    limpiarFormulario();
    modalFormulario.show();
    codigo.value = uuidv4();
}

function agregarProducto(e){
    e.preventDefault();
    if(validarNombre(nombre) === true && 
    validarImagen(imagen) && 
    validarPrecio(precio) && 
    validarDescripcion(descripcion) && 
    validarCategoria(categoria) &&
    validarCantidad(cantidad)){
       if(productoNuevo === true){
          crearProductoNuevo();
       }else{
         actualizarProducto();
       }
    }
}

function crearProductoNuevo(){
    let nuevoProducto = new Producto(
        codigo.value, 
        nombre.value,
        imagen.value,
        precio.value,
        descripcion.value,
        categoria.value,
        cantidad.value
    );
    listaProductos.push(nuevoProducto);
    guardarProductoEnLocalStorage();

    limpiarFormulario();
    codigo.value = uuidv4();
    crearFila(nuevoProducto);
    modalFormulario.hide();
}




function limpiarFormulario(){
    formulario.reset()
    nombre.className = 'form-control bg-dark text-light'
    imagen.className = 'form-control bg-dark text-light'
    precio.className = 'form-control bg-dark text-light'
    descripcion.className = 'form-control bg-dark text-light'
    categoria.className = 'form-control bg-dark text-light'
    cantidad.className = 'form-control bg-dark text-light'
}

function guardarProductoEnLocalStorage(){
    localStorage.setItem('listaProductosStorage', JSON.stringify(listaProductos))
}


// borrar Producto

window.borrarProducto = function (codigo){ 
    Swal.fire({
        title: 'Eliminar Producto',
        text: "Estas seguro que quiere eliminar el producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        CancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed){
            let listaProductosNew = listaProductos.filter((producto) =>{return producto.codigo != codigo});
            listaProductos = listaProductosNew;
            guardarProductoEnLocalStorage();
            borrarTabla();
            cargarProducto();

          Swal.fire(
            'Producto eliminado',
            'El producto se borro correctamente',
            'success'
          )
        }
      })
    
}

function borrarTabla(){
    let tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML ="";
}

window.editarProducto = function (buscarCodigo){
    productoNuevo = false;
    limpiarFormulario();
    // buscar el en el arreglo el producto seleccionado
 let buscarProducto = listaProductos.find((producto)=> producto.codigo === buscarCodigo);
 codigo.value = buscarProducto.codigo;
 nombre.value = buscarProducto.nombre;
 imagen.value = buscarProducto.imagen;
 precio.value = buscarProducto.precio;
 descripcion.value = buscarProducto.descripcion;
 categoria.value = buscarProducto.categoria;
 cantidad.value = buscarProducto.cantidad;
 modalFormulario.show();
}


function actualizarProducto(){
   
    // buscar la posicion del producto que quiero editar
       let posicionProductoEditar = listaProductos.findIndex((producto)=>producto.codigo === codigo.value)
     
    // actualizar los datos del producto que se esta editando
     listaProductos[posicionProductoEditar].nombre = nombre.value;
     listaProductos[posicionProductoEditar].imagen = imagen.value;
     listaProductos[posicionProductoEditar].precio = precio.value;
     listaProductos[posicionProductoEditar].descripcion = descripcion.value;
     listaProductos[posicionProductoEditar].categoria = categoria.value;
     listaProductos[posicionProductoEditar].cantidad = cantidad.value;

    //actualizar el localstorage

    guardarProductoEnLocalStorage();

    //actualizar la tabla
    borrarTabla();
    cargarProducto();

    // cerrar venana modal
    modalFormulario.hide();
    limpiarFormulario();
    //indicar al usuario qe se modifico el producto
    Swal.fire(
        'Producto ,Modificado',
        'El producto seleccionado fue correctamente modificado',
        'success'
      )
}

// LISTA DE USUARIOS


let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosStorage')) || [];
let modalListaUsuarios = new bootstrap.Modal(document.getElementById("modalListaUsuarios"));
let btnVerUsuarios = document.getElementById("btnVerUsuarios");

btnVerUsuarios.addEventListener("click", mostrarLista);

function mostrarLista(){
    modalListaUsuarios.show();
}

cargarUsuarios();

function cargarUsuarios(){
    if(listaUsuarios.length > 0){
        listaUsuarios.forEach(usuario => {crearFilaUsuario(usuario)});
    }
}

function crearFilaUsuario(usuario){
    let rango = ""
    if(usuario.administrador){
        rango = "Administrador"
    } else {
        rango = "Invitado"
    }
    let tablaUsuarios = document.getElementById("tablaUsuarios");
    tablaUsuarios.innerHTML += `
    <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${rango}</td>
        <td class="text-center"><button type="button" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></button></td>
    </tr>`
}