class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


class Articulo {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

//productos declarados
const producto = [];

function cargarProductos () {
    // MONITORES
    producto.push( new Articulo (01, 'MONITOR LED 22" ASUS FULL HD 60Hz 1Ms VP228HE-J', 41339, '../images/monitores/monitor1.jpg'));
    producto.push( new Articulo (02, 'MONITOR LED 19.5" GFAST T-195 60Hz 14Ms VGA - HDMI', 24999, '../images/monitores/monitor2.jpg'));
    producto.push( new Articulo (03, 'MONITOR GAMER 24.5" BENQ HD 240Hz ZOWIE XL2546K', 165999, '../images/monitores/monitor3.jpg'));
    //CPU
    producto.push( new Articulo (04, 'PC DELL VOSTRO 3681 CORE I5 DÉCIMA GENERACIÓN RAM 8GB 1TB HDD WINDOWS PRO', 19399, '../images/cpu/cpu1.jpg'));
    producto.push( new Articulo (05, 'PC DELL VOSTRO 3681 CORE I3 DÉCIMA GENERACIÓN RAM 8GB 500GB HDD WINDOWS PRO', 16799, '../images/cpu/cpu2.jpg'));
    producto.push( new Articulo (06, 'GABINETE GAMER REDRAGON DEVASTATOR Gc-550 RGB PC', 16400, '../images/cpu/cpu3.jpg'));
    //NOTEBOOKS
    producto.push( new Articulo (07, 'NOTEBOOK ASUS X515EA I5 1135G7 8GB SSD 256GB 15.6" FREE', 149790,'../images/notebooks/ntb1.jpg'));
    producto.push( new Articulo (08, 'NOTEBOOK BANGHO MAX L5 I7 1165G7 8GB SSD 480GB 15.6 W11', 192990,'../images/notebooks/ntb2.jpg'));
    producto.push( new Articulo (09, 'NOTEBOOK LENOVO THINKPAD E14 RYZEN 7 5700U 8GB SSD 256GB 14 FREE', 214990,'../images/notebooks/ntb3.jpg'));
    //MOUSE
    producto.push( new Articulo (10, 'MOUSE RAZER DEATHADDER V2 CHROMA RGB GAMER', 10200, '../images/mouse/mouse1.png'));
    producto.push( new Articulo (11, 'MOUSE LOGITECH G G502 HERO RGB GAMER 16000 DPI - KODAL LOL', 11050, '../images/mouse/mouse2.jpg'));
    producto.push( new Articulo (12, 'MOUSE HYPERX INALAMBRICO PULSEFIRE DART RGB 3200 DPI GAMER', 16100, '../images/mouse/mouse3.jpg'));
    //TECLADOS
    producto.push( new Articulo (13, 'TECLADO MECANICO CORSAIR K60 PRO LED ROJO - CHERRY VIOLA', 19400, '../images/teclados/teclado1.webp'));
    producto.push( new Articulo (14, 'TECLADO MECANICO HYPERX ALLOY ORIGINS RGB SWITCH RED ESPAÑOL', 21250, '../images/teclados/teclado2.webp'));
    producto.push( new Articulo (15, 'TECLADO MECANICO LOGITECH G PRO LOL 2 - GX BROWN TACTILE', 22600, '../images/teclados/teclado3.jpg'));
    //PLACAS
    producto.push( new Articulo (16, 'PLACA DE VIDEO COLORFUL GEFORCE RTX 3070 NB V2 8GB DDR6 LHR', 186000, '../images/placas-video/placa1.jpg'));
    producto.push( new Articulo (17, 'PLACA DE VIDEO COLORFUL IGAME RTX 3060 ULTRA W 12GB DDR6 OC', 180000, '../images/placas-video/placa2.jpg'));
    producto.push( new Articulo (18, 'PLACA DE VIDEO PNY GEFORCE GTX 1660TI 6GB DDR6 DUAL FAN', 87000, '../images/placas-video/placa2.jpg')); 
}
cargarProductos();