const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList.add("tarjeta-producto",);
    nuevaBicicleta.innerHTML = `
    <img src="imagenes/book${producto.id}.jpg">
    <h3>${producto.nombre}</h3>
    <p class="precio algo">$${producto.precio}</p>
    <p>${producto.cont}</p>
    <button>Agregar al carrito</button>
    <a href="book${producto.id}.html" class="border">Ver más</a>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(bicicletas);