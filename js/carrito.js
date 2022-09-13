
let carrito =[];
let tablaCarrito = document.getElementById("tabla-carrito");
let contadorCarrito = document.getElementById("contadorCarrito")


// si la pagina recarga llamamos al carrito en el localstorage
document.addEventListener("DOMContentLoaded",() => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        crearCarrito();
    }
})


// iteramos sobre la lista de productos y buscamos el producto que llega por parametros
function agregarCarrito(codigoCarrito){
    let item = listaProductos.find((item)=>item.codigo === codigoCarrito)
    carrito.push(item);
    crearCarrito();
}

function eliminarCarrito(codigo){
    // buscamos el producto
   let itemC = carrito.find((producto)=>producto.codigo === codigo);
  // buscamos el indice del producto   
   let indice = carrito.indexOf(itemC);
  //eliminamos el producto seleccionado    
   carrito.splice(indice,1);
   crearCarrito();
   
}


//   creamos el carrito y lo agregamos al modal
function crearCarrito(){
    //   actulizamos la lista 
      tablaCarrito.innerHTML="";
      carrito.forEach((itemCarrito)=>{
          tablaCarrito.innerHTML += `
          <tr>
          <td scope="row"><img class="w-100" src="${itemCarrito.imagen}" alt="${itemCarrito.nombre}"></td>
          <td>${itemCarrito.codigo}</td>
          <td>${itemCarrito.nombre}</td>
          <td>${itemCarrito.precio}</td>
          <td>
              <button type="button" class="btn btn-outline-danger" onclick="eliminarCarrito('${itemCarrito.codigo}')">
                  <i class="bi bi-trash-fill"></i>
              </button>
          </td>
       </tr>`
          
       localStorage.setItem("carrito",JSON.stringify(carrito))
    })
    // igualamos el contador a la longuitud del arreglo carrito
    contadorCarrito.innerText=carrito.length;
}





