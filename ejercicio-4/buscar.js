
/**BUCLES, ARRYS,BUSQUEDA */
const productos = ["Teclado","Raton","Monitor","Auriculares","Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

let busqueda = "Raton"
let encontrada = -1; 

for (let i = 0 ; i < productos.length ; i++) {
   if (productos[i] === busqueda){
        encontrada = i;
        break;
    }
}


if (encontrada !== -1){
  console.log (productos [encontrada] + " esta es la posición" +
    encontrada  + ". precio:" + precios [encontrada] + " €.  stock." + stock[encontrada]);
  }