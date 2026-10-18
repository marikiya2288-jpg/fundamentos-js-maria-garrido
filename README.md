# fundamentos-js-maria-garrido
EJERCICIO 1;  MOSTRAR TIKECT:
he calculado el precio por la cantidad de productos sin iva.
 creo una variable llamada iva ,calculo porcentaje iva por precio sin iva por los la cantidad de productos.
calculo el total sumando el iva, multiplicando precio y cantidad y mostrar en terminal.(lo hago asi porque en la constante le puse directamente el 0.21 del iva)

En el calculo del raton cambio algunos pasos en el iva lo creo una constante de porcentaje iva lo divido entre 100 y multiplico precio y cantidad y  en console log uso toFixed(2) para sacar dos decimales.

EJERCICIO 2; DESCUENTO ENVIO ; CONDICIONALES CASOS LIMITE;
 he usaco las condicionales if, else he creado una variable para calcular el importe descuento para ver si cumples las condiciones de envio gratis, hago un console log con operador ternario porque solo tenia dos opciones si el envio era gratis o no mostrando el precio del envio.


EJERCICIO 3; EXPLORAR CATALOGO;
 El objetivo, recorrer los productos, consultar precios y unidades disponibles y realizar calculos sobre el inventario.

Conceptos trabajados;
Bucles for para recorrer los arrays.
Arrays paralelos para relacionar productos, precios y stock.
Condicionales if para comprobar si hay productos agotados.
Contador para calcular cuantos productos estan agotados.
Comparar para encontrar el producto mas caro.
Acumular para calcular el valor total del inventario.
.toFixed(2) para mostrar los precios con dos decimales.

 EJERCICIO4 4 ; BUSCAR PRODUCTO;
 
 He recorrido array con bucle for igual al ejercicio anterior.
  he buscado productos con condicion if y else 
 he creado variables para guardar la variable buscada para que me diera su posicion, precio ,stock y si existia o no en catalogo.
 he usado el break para el cierre del bucle una vez econtrado el producto que queria.
 Por ultimo he creado una condicional simple if, para las minusculas y mayusculas no se distingan y los busque igual.( esot lo he dejado comentando en el codigo para mostrar la primera parte del ejercicio y luego el reto,)REORDAR; QUIRAR EL BREAK DEL BUCLE FOR PARA QUE ENTRE EN EL IF SIEMPLE TOLOWERCASE.

 EJERCICIO 5; FUNCIONES OBLIGATORIAS;

Objetivos de aprendizaje;
Crear funciones con parámetros.
Devolver resultados mediante return.
Ejecutar funciones con distintos argumentos.
Mostrar resultados con console.log().
Utilizar condiciones y bucles.
Recorrer arrays mediante índices.
Buscar elementos y calcular valores a partir de arrays.
Detectar y corregir errores de sintaxis.
Funciones implementadas
calcularImporteLinea(precio, cantidad)
Calcula el importe de una línea de compra.
calcular Iva(importe)
Calcula el IVA del 21 %.
calcularDescuento(importe)
Calcula el descuento según los tramos establecidos.
calcularEnvio(importe)
Determina el coste del envío.
contarAgotados(stock)
Cuenta los productos sin unidades disponibles.
productoMasCaro(productos, precios)
Devuelve el nombre del producto más caro.
valorInventario(precios, stock)
Calcula el valor total del inventario.
buscarProducto(productos, nombre)
Devuelve el índice del producto o -1 si no existe.

 Conceptos de JavaScript utilizados

Funciones y parámetros
Las funciones reciben los datos mediante parámetros y se ejecutan al llamarlas con sus argumentos.
Condicionales
Se utilizan if y else if para comprobar condiciones, aplicar descuentos y comparar precios.
Bucles
El bucle for permite recorrer los elementos de un array y realizar operaciones sobre ellos.
Arrays e índices
Los índices permiten acceder a los elementos de un array. La primera posición es 0.
Valores de retorno
return devuelve el resultado de la función. console.log() permite mostrarlo en la consola.

Las funciones se prueban con diferentes argumentos para comprobar su funcionamiento.
