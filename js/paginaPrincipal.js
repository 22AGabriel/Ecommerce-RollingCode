let listaProductos = JSON.parse(localStorage.getItem('listaProductosStorage')) || [];
let grilla = document.getElementById("grilla")

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
      alt="${producto.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}<span class="badge text-bg-success">Nuevo</span></h5>
      <p><span>$${producto.precio}</span></p>
    </div>
    <div class="card-body ocultarCard">
      <h5 class="card-title  display-6">Rolling</h5>
      <h6 class="card-title  display-6 mb-5">Sporting</h6>
      <a href="#" class="btn btn-success mb-5">ver detalle</a>
    </div>
  </div>
    
    
    `
}


cargarProducto();