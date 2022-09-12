
// traer el parametro desde la url

const urlParametro = new URLSearchParams(window.location.search);
let carrito =[];

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

// agregar al carrito los productos
function agregarCarrito(carritoCod){
  let carritoItems = listaProductos.find((productos)=>productos.codigo === carritoCod);
  carrito.push(carritoItems);
}

console.log(carrito);