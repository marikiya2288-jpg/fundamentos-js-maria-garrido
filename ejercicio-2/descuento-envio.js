let importe = 52
let descuento = 0
let porcentajeIva = 0
let envio = 4.95
let total = 0

if(importe > 100) {
    descuento = importe * 0.10
}
else if (importe > 50 && (importe <= 100)){
    descuento = importe * 0.05
}
else {
    descuento = 0 
}


let importeDescuento = importe - descuento

if ( importeDescuento > 50){
    envio = 0
}
else {
    envio = envio
}
total = importeDescuento + envio

console. log( importe, "importe", descuento,"descuento")
console.log(importeDescuento,"importe con descuento", envio === 0 ? "Gratis" : envio,"envio", total,"total");
