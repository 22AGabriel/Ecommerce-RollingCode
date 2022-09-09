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

btnCrearProducto.addEventListener('click', mostrarFormulario);
formulario.addEventListener('submit', agregarProducto);
nombre.addEventListener('blur', () => {validarNombre(nombre)});
imagen.addEventListener('blur', () => {validarImagen(imagen)});
precio.addEventListener('blur', () => {validarPrecio(precio)});
descripcion.addEventListener('blur', () => {validarDescripcion(descripcion)});
categoria.addEventListener('blur', () => {validarCategoria(categoria)});
cantidad.addEventListener('blur', () => {validarCantidad(cantidad)});


function mostrarFormulario(){
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
        codigo.value = uuidv4()
    }
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