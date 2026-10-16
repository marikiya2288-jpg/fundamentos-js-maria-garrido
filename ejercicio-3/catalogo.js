const productos = ["teclado","raton","monitor","auriculares","Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

let productosAgotados = 0;
let precioMaximo = precios [0];
let productoMasCaro = productos [0];

for ( let i = 0 ; i < productos.length; i++) {
    let nombre = productos [i];
    let precioUnidad = precios [i] ;
    let unidad = stock [i];

    if (unidad === 0){
        console.log (`${nombre} - ${precioUnidad} € - AGOTADO`);
        productosAgotados++;
        console.log (`${nombre} - ${precioUnidad} € (${unidad}  uds)`)
    }

        if (precioUnidad > precioMaximo) {
            precioMaximo = precioUnidad;
            productoMasCaro = nombre;
        }
    }


console.log ("productos agotados", productosAgotados);
console.log (`producto mas caro ${productoMasCaro} - ${precioMaximo.toFixed(2)} €`)