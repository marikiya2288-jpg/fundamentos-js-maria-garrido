const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA
const stock     = [10, 25, 3, 0, 7];

// Pedido del cliente 
const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];



 /* MOSTRAR EL CATÁLOGO INICIAL*/

console.log("--- 1. CATÁLOGO INICIAL ---");


for (let i = 0; i < productos.length; i++) {  /*RECORRE EL CATALOGO INICIAL */
    const disponibilidad = stock[i] === 0 ? "Agotado" : `${stock[i]} uds`; /*uso operador ternario porque solo tenemos dos opciones. */
    console.log(`${productos[i]} - Precio: ${precios[i].toFixed(2)}€ - Stock: ${disponibilidad}`); 
}

/*PROCESANDO EL PEDIDO*/

console.log("--- 2. PROCESAMIENTO DEL PEDIDO ---");
const ticketProductos = [];
const ticketCantidades = [];
const ticketPrecios = [];

for (let i = 0; i < pedidoProductos.length; i++) {
    const nombre = pedidoProductos[i]; /*Guarda el nombre del producto que toca revisar en la vuelta actual*/
    const cantidad = pedidoCantidades[i]; /* Guarda la cantidad pedida */
    const posicionPrecios = buscarProducto(nombre); /*guardamos su posición numérica */ /* si no se crea la funcion buscarProducto no funciona */

   
    if (posicionPrecios === -1) { /* mira si el producto no existe*/
        console.log(`Aviso: El producto "${nombre}" no existe.`);
    } else if (stock[posicionPrecios] === 0) { /*existe pero no tenemos stock*/
        console.log(`Aviso: El producto "${nombre}" está agotado.`);
    } else {
        let cantidadServida = cantidad;
        
        /* Si piden más de lo que hay*/
        if (cantidad > stock[posicionPrecios]) { /* se activa si el pedido es mayor al stock */
           console.log(`AVISO: solo hay ${stock[posicionPrecios]} uds de ${nombre}, se sirven ${stock[posicionPrecios]}`);

            cantidadServida = stock[posicionPrecios]; 
        } else {
            console.log(`OK:  ${cantidadServida} x  ${nombre}.`);
        }

        /*  Si se ha servido algo, restamos del stock y añadimos al ticket*/
        if (cantidadServida > 0) { /*solo mira los productos que si existen en el catalogo */
            stock[posicionPrecios] = stock[posicionPrecios] - cantidadServida; /* actualiza el stock */
            ticketProductos.push(nombre); /* esto guarda el nombre en la cajas de arrays del pedido */
            ticketCantidades.push(cantidadServida); /*guarda la cantidad en el tikect la cantidad de unidades que se lleva no las que pide.*/
            ticketPrecios.push(precios[posicionPrecios]); /*busca en el catalogo el precio unitario y lo guarda en el tikect*/
        }
    }
} //* cierre termina el bucle for*/


/* FUNCIONES A LLAMAR */

function buscarProducto(nombre) {
    return productos.indexOf(nombre); /* con indexof no have falta crear variable, busca directamente. */
}

function calcularImporteLinea(precio, cantidad) { /*calcula el importe sin iva. */
    return precio * cantidad;
}

function calcularDescuento(subtotal) { /* calcula el descuento  */
    if (subtotal > 100) {
        return subtotal * 0.10; /*10%*/
    } else if (subtotal > 50) {
        return subtotal * 0.05; /*5% */
    }
    return 0;
}

function calcularIVA(baseImponible) { /*calcula la base y le suma el iva. */
    return baseImponible * 0.21;
}

function calcularEnvio(baseImponible) { /*calcula el envio */
    return baseImponible >= 50 ? 0 : 4.95; /* operador ternario al poner dos opciones si es mas 50€ envio gratis si no 4.95 */
}
     console.log("===TIKEC===T");



let subtotal = 0; /*Acumula el dinero que empieza en 0*/

for (let i = 0; i < ticketProductos.length; i++) {
    
    const importeLinea = calcularImporteLinea(ticketPrecios[i], ticketCantidades[i]);
    
    subtotal = subtotal + importeLinea;     /* Sumamos el importe de este producto al subtotal general*/
  
    
    
    console.log(`${ticketCantidades[i]}x ${ticketProductos[i]} (${ticketPrecios[i].toFixed(2)}€/ud) - Importe: ${importeLinea.toFixed(2)}€`);
}

/*lLLAMADA DE LAS FUNCIONES*/
const descuento = calcularDescuento(subtotal);  /*Calcula el dinero que te ahorras.*/
const base      = subtotal - descuento;  /*resultado de restar el subtotal menos el descuento*/
const iva       = calcularIVA(base); /*calcula el iva 21% */
const envio     = calcularEnvio(base); /*calcula el envio revisando la funcion para ver que si cumple con envio gratis o no.*/
const total     = base + iva + envio; /*calcula el pago total */


