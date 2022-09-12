let listaProductos = JSON.parse(localStorage.getItem('listaProductosStorage')) || [];
let grilla = document.getElementById("grilla");
let carrito =[];
let itemproducto = document.getElementById("tablaCarrito");

function cargarProducto(){
    if(listaProductos.length > 0){
      listaProductos.forEach(producto => {crearProducto(producto)});
    }
}

function crearProducto(producto){
    grilla.innerHTML += `
    
    <div class="card col-12 col-md-3 card-j filterC">
    <img
      src="${producto.imagen}"
      class="card-img-top"
      alt="${producto.nombre}${producto.categoria}"
    />
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p><span>$${producto.precio}</span></p>
    </div>
    <div class="card-body ocultarCard">
      <h5 class="card-title  display-6">Rolling</h5>
      <h6 class="card-title  display-6 mb-1">Sporting</h6>
      <div>
      <button class="btn btn-success" onclick="verPaginaDetalle('${producto.codigo}')">ver detalle</button>
      <button class="btn btn-warning ms-1" onclick="agregarCarrito('${producto.codigo}')"><i class="bi bi-cart4"></i></button>
      </div>
    </div>
    </div> 
    `
}


cargarProducto();

function verPaginaDetalle(codigoProducto){
    console.log(codigoProducto);
    window.location.href = window.location.origin + '/pages/paginaDetalle.html?codigo='+ codigoProducto;
}




// agregar al carrito los productos








function agregarCarrito(carritoCod){
  let carritoItems = listaProductos.find((productos)=>productos.codigo === carritoCod);
  carrito.push(carritoItems);
  actualizarCarrito();
  console.log(carrito)
}


function actualizarCarrito(){
  carrito.forEach((producto)=>{
    itemproducto.innerHTML = `
    <div class="col-12 col-md-6">
      <img src="${producto.codigo}" alt="" class="w-100">
    </div>
    <div class="col-12 col-md-6">
      <h5>campera</h5>
      <p>precio</p>
      <button class="btn btn-success">Cancelar</button>
    </div>
    `
  })
}