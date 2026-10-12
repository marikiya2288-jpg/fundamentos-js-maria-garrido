const producto = " Monitor";
const precio = 189;          /* precio unidad, sin iva*/
const cantidad = 2;
const porcentajeIva= 0.21;

subtotal = precio *  cantidad      /*378*/
console.log("subtotal Monitor", subtotal);


let iva = porcentajeIva * precio * cantidad  /*79.38 */
console.log ("iva monitor", iva);

total = iva + precio * cantidad /*457.38*/ 
console.log ("total Monitor", total)
 //**  tres unidades de raton a 19.90*/
 const producto1= "raton"
 const cantidad1 = 3
 const precio1 = 19.90
 const porcentajeIva1 = 21

 const subTotal1 = cantidad1 * precio1 
 console.log (" Raton subtotal",subTotal1.toFixed(2))
const iva1 = (porcentajeIva1/100 * precio1) * cantidad1
 console.log("Raton iva1", iva1.toFixed(2))

const total1 = iva1 + precio1 * cantidad1
console.log (` Raton total a pagar:${total1.toFixed(2)}`)