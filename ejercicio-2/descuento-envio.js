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



