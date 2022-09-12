

let carrito =[];
let tablaCarrito = document.getElementById("tabla-carrito");





function agregarCarrito(codigoCarrito){
    let item = listaProductos.find((item)=>item.codigo === codigoCarrito)
    carrito.push(item)
    crearCarrito();
    console.log(carrito)
    
}
  
  function crearCarrito(){

      carrito.forEach((itemCarrito)=>{
          tablaCarrito.innerHTML += `
           <img src="${itemCarrito.imagen}" alt="" class="w-100">
          <h5>${itemCarrito.nombre}</h5>
          <p>${itemCarrito.precio}</p>
          <button class="btn btn-success">Cancelar</button>
          </    
          `
      })
  }