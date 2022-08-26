class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

/**
 * Definiciones de constantes
 */
const estandarDolaresAmericanos = Intl.NumberFormat('en-US');

//Arrays donde guardaremos catálogo de productos y elementos en carrito
const productos = [];
const elementosCarrito = [];

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

/**
 * Ejecución de funciones
 */

cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

/**
 * Definiciones de funciones
 */

function cargarProductos() {
    productos.push( new Producto (01, 'MONITOR LED 22" ASUS FULL HD 60Hz 1Ms VP228HE-J', 41339, '../images/monitores/monitor1.jpg'));
productos.push( new Producto (02, 'MONITOR LED 19.5" GFAST T-195 60Hz 14Ms VGA - HDMI', 24999, '../images/monitores/monitor2.jpg'));
productos.push( new Producto (03, 'MONITOR GAMER 24.5" BENQ HD 240Hz ZOWIE XL2546K', 165999, '../images/monitores/monitor3.jpg'));
//CPU
productos.push( new Producto (04, 'PC DELL VOSTRO 3681 CORE I5 DÉCIMA GENERACIÓN RAM 8GB 1TB HDD WINDOWS PRO', 19399, '../images/cpu/cpu1.jpg'));
productos.push( new Producto (05, 'PC DELL VOSTRO 3681 CORE I3 DÉCIMA GENERACIÓN RAM 8GB 500GB HDD WINDOWS PRO', 16799, '../images/cpu/cpu2.jpg'));
productos.push( new Producto (06, 'GABINETE GAMER REDRAGON DEVASTATOR Gc-550 RGB PC', 16400, '../images/cpu/cpu3.jpg'));
//NOTEBOOKS
productos.push( new Producto (07, 'NOTEBOOK ASUS X515EA I5 1135G7 8GB SSD 256GB 15.6" FREE', 149790,'../images/notebooks/ntb1.jpg'));
productos.push( new Producto (08, 'NOTEBOOK BANGHO MAX L5 I7 1165G7 8GB SSD 480GB 15.6 W11', 192990,'../images/notebooks/ntb2.jpg'));
productos.push( new Producto (09, 'NOTEBOOK LENOVO THINKPAD E14 RYZEN 7 5700U 8GB SSD 256GB 14 FREE', 214990,'../images/notebooks/ntb3.jpg'));
//MOUSE
productos.push( new Producto (10, 'MOUSE RAZER DEATHADDER V2 CHROMA RGB GAMER', 10200, '../images/mouse/mouse1.png'));
productos.push( new Producto (11, 'MOUSE LOGITECH G G502 HERO RGB GAMER 16000 DPI - KODAL LOL', 11050, '../images/mouse/mouse2.jpg'));
productos.push( new Producto (12, 'MOUSE HYPERX INALAMBRICO PULSEFIRE DART RGB 3200 DPI GAMER', 16100, '../images/mouse/mouse3.jpg'));
//TECLADOS
productos.push( new Producto (13, 'TECLADO MECANICO CORSAIR K60 PRO LED ROJO - CHERRY VIOLA', 19400, '../images/teclados/teclado1.webp'));
productos.push( new Producto (14, 'TECLADO MECANICO HYPERX ALLOY ORIGINS RGB SWITCH RED ESPAÑOL', 21250, '../images/teclados/teclado2.webp'));
productos.push( new Producto (15, 'TECLADO MECANICO LOGITECH G PRO LOL 2 - GX BROWN TACTILE', 22600, '../images/teclados/teclado3.jpg'));
//PLACAS
productos.push( new Producto (16, 'PLACA DE VIDEO COLORFUL GEFORCE RTX 3070 NB V2 8GB DDR6 LHR', 186000, '../images/placas-video/placa1.jpg'));
productos.push( new Producto (17, 'PLACA DE VIDEO COLORFUL IGAME RTX 3060 ULTRA W 12GB DDR6 OC', 180000, '../images/placas-video/placa2.jpg'));
productos.push( new Producto (18, 'PLACA DE VIDEO PNY GEFORCE GTX 1660TI 6GB DDR6 DUAL FAN', 87000, '../images/placas-video/placa3.jpg'));
}

function cargarCarrito() {
    /*let elementoCarrito = new ElementoCarrito(
        new Producto(1, 'Muffin', 1.99, './img/muffin.jpg'),
        1
    );

    elementosCarrito.push(elementoCarrito);*/
}

function dibujarCarrito() {

    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${elemento.producto.precio}</td>
                <td>$ ${estandarDolaresAmericanos.format(elemento.producto.precio*elemento.cantidad)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito+=elemento.cantidad*elemento.producto.precio;

            //agregamos evento a carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let borrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);

            borrarProducto.addEventListener("click", (e) => {
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });

        }
    );

    //contenedorCarritoCompras.innerHTML = renglonesCarrito;
    
    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
    } else {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Total de la compra: $${estandarDolaresAmericanos.format(sumaCarrito)}</th>
        `;
    }

}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} USD</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor Card
    //let contenedorCarta = document.createElement("div");
    //contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    //contenedorCarta.append(carta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        //alert("Hiciste click en el producto" + producto.nombre);

        let elementoExistente = elementosCarrito.find((elemento) => elemento.producto.id == producto.id);

        if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }

        dibujarCarrito();

        Swal.fire({
            icon: 'success',
            title: 'Procuto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })

    } 
    
    return carta;

}

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

}



let finalizar = document.querySelector('#finalizar')
finalizar.onclick = ()=> {
    Swal.fire({
        title: '¡La compra se ha realizado con exito!',
        imageUrl: '../images/tecnologia-y-trabajo-social-8-320.webp',
        imageWidth: 400,
        imageHeight: 200,
      })
}