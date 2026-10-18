const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];


function calcularImporteLinea (precio,cantidad){
    return (precio * cantidad);
}
console.log("CALCULAR IMPORTE EN LINEA");

console.log(calcularImporteLinea(189, 2)); /*378 */
console.log(calcularImporteLinea(45.99, 10).toFixed(2)); /*459.90*/
console.log(calcularImporteLinea(19.90, 25).toFixed(2));/*497.50 */
console.log(calcularImporteLinea(59.95, 0));/*0*/
console.log(calcularImporteLinea(34.50, 7));/*241.50*/

function calcularIva (importe){

    return importe * 0.21;
}
console.log("CALCULAR IVA");

console.log(calcularIva(378));/*79.38*/
console.log(calcularIva(459.90).toFixed(2)); /*96.58*/
console.log(calcularIva(497.50).toFixed(2));/*104.47*/
console.log(calcularIva(0));/*0*/
console.log(calcularIva(379.38).toFixed(2));/*79.67*/


function calcularDescuento (importe){
    if ( importe > 100 ){
     return importe * 0.10;
    
    } else if (importe > 50 && importe <= 100){
        return importe * 0.05;
    } else { 
        return 0;

        }
    }
    console.log("DESCUENTO");
    console.log(calcularDescuento(120));/*12*/
    console.log(calcularDescuento(50));/*0*/
    console.log(calcularDescuento(80));/*4*/

   function calcularEnvio (importe){
    if ( importe > 50){
        return 0;
    } else {
        return 4.95;
    }
   }
   console.log("CALULAR ENVIO");
   console.log(calcularEnvio(49.40)); /*4.95*/
   console.log(calcularEnvio(120)); /*0*/
   function contarAgotados (stock){
    let contador = 0;

   for (let i = 0; i < stock.length;i++){
       if (stock[i] === 0)
        contador ++;
       }
        return contador;
   }
   console.log("CALCULAR STOKC")
   console.log(contarAgotados(stock));/*1*/
   console.log(contarAgotados([2, 0, 5, 0, 0, 9]));/*3*/
 
   function productoMasCaro(productos, precios){
    let masCaro = 0;
    
    for (let i = 0; i < precios.length; i++) 

        if (precios[i] > precios[masCaro]){
                masCaro = i;
        }
           return productos[masCaro];
    }
 
   console.log("CALCULO PRODUCTO MAS CARO")

   console.log(productoMasCaro(productos,precios));/*Monitor*/
   console.log(productoMasCaro(["Auriculares", "Webcam"],[59.95, 34.50]));/*Auriculares*/

   function valorInventario (precios,stock){
    let total = 0;
    for (let i = 0 ; i < precios.length;i++){
      total = total +  precios[i] * stock[i];
}
    return total;
}
console.log("VALOR TOTAL DE INVENTARIO");
   console.log(valorInventario(precios,stock));/*1765.9*/
   console.log(valorInventario([189.00, 59.95, 34.50],[3, 0, 7]));/*808.5*/

   function buscarProducto (productos,nombre){

   let busqueda = "Altavoz";
   let busqueda1 = " Raton"
   
    for(let i = 0; i < productos.length; i++){
        if (productos[i] === nombre){
            return i;
        }
    }
    return -1;
   }
   console.log("BUSCARO PRODUCTO");
   console.log(buscarProducto(productos, "Altavoz"));
   console.log(buscarProducto(productos, "Ratón"));
   console.log(buscarProducto(productos, "Monitor"));


   
   
