let carrito =[];
let tablaCarrito = document.getElementById("tabla-carrito");
let contadorCarrito = document.getElementById("contadorCarrito")

// traer el parametro desde la url
const urlParametro = new URLSearchParams(window.location.search);

// buscar el producto en el arreglo
let listaProductos = JSON.parse(localStorage.getItem('listaProductosStorage'))||[];
let producto = listaProductos.find((itemproducto)=>itemproducto.codigo === urlParametro.get('codigo'));
let articuloDetalle = document.getElementById("articuloDetalle");
articuloDetalle.innerHTML = `

<div class="card mb-3 borderDetalle">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${producto.imagen}" alt="${producto.nombre}"  class="w-100">
  </div>
  <div class="col-md-8 bg-black">
    <div class="card-body text-light">
      <h5 class="card-title display-6">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">Precio: $ ${producto.precio}</p>
      <p class="card-text"><small class="text-muted">Categoria :${producto.categoria}</small></p>
      <button class="btn btn-success" onclick="agregarCarrito('${producto.codigo}')"><i class="bi bi-cart-plus-fill"></i> agregar al carrito</button>
    </div>
  </div>
</div>
</div>

`

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




