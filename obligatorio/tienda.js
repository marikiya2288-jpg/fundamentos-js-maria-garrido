const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA
const stock     = [10, 25, 3, 0, 7];

// Pedido del cliente 
const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];



 /* MOSTRAR EL CATÁLOGO INICIAL*/

console.log("--- 1. CATÁLOGO INICIAL ---");


for (let i = 0; i < productos.length; i++) {
    const disponibilidad = stock[i] === 0 ? "Agotado" : `${stock[i]} uds`;
    console.log(`${productos[i]} - Precio: ${precios[i].toFixed(2)}€ - Stock: ${disponibilidad}`);
}



