

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
          <tr>
          <td scope="row"><img class="w-100" src="${itemCarrito.imagen}" alt="${itemCarrito.nombre}"></td>
          <td>${itemCarrito.codigo}</td>
          <td>${itemCarrito.nombre}</td>
          <td>${itemCarrito.precio}</td>
          <td>${itemCarrito.descripcion}</td>
          <td>${itemCarrito.categoria}</td>
          <td>${itemCarrito.cantidad}</td>
          <td>
              <button type="button" class="btn btn-outline-danger" onclick="borrarProducto('${itemCarrito.codigo}')">
                  <i class="bi bi-trash-fill"></i>
              </button>
              <button type="button" class="btn btn-outline-warning mt-2" onclick="editarProducto('${(itemCarrito.codigo)}')">
                  <i class="bi bi-pencil-square"></i>
              </button>
          </td>
       </tr>`
          
      })
  }



//   <img src="${itemCarrito.imagen}" alt="" class="w-100">
//   <h5>${itemCarrito.nombre}</h5>
//   <p>${itemCarrito.precio}</p>
//   <button class="btn btn-success">Cancelar</button>
//   </    