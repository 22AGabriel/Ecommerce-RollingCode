export class Producto{
    constructor(codigo, nombre, imagen, precio, descripcion, categoria, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.cantidad = cantidad;

    }

    set modificarNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    set modificarImagen(imagenNueva){
        this.imagen = imagenNueva;
    }
    set modificarPrecio(precioNuevo){
        this.precio = precioNuevo;
    }
    set modificarDescripcion(descripcionNueva){
        this.descripcion = descripcionNueva;
    }
    set modificarCategoria(categoriaNueva){
        this.categoria = categoriaNueva;
    }
    set modificarCantidad(cantidadNueva){
        this.cantidad = cantidadNueva;
    }

    get mostrarCodigo(){
        return this.codigo;
    }
    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarImagen(){
        return this.imagen;
    }
    get mostrarPrecio(){
        return this.precio;
    }
    get mostrarDescripcion(){
        return this.descripcion;
    }
    get mostrarCategoria(){
        return this.categoria;
    }
    get mostrarCantidad(){
        return this.cantidad;
    }
}