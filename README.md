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

Ejercicio 6: Tienda de informática

Descripción del proyecto

El objetivo de este ejercicio es desarrollar un programa en JavaScript que simula la gestión de una tienda de informática.
El programa muestra un catálogo de productos, procesa un pedido de un cliente, comprueba la disponibilidad de las unidades solicitadas, actualiza el stock y genera un ticket con los importes correspondientes.
También incluye funciones para calcular descuentos, IVA y gastos de envío, así como un resumen de las unidades servidas y los productos que no se han podido servir.

1. Mostrar el catálogo inicial;

Objetivo: Mostrar todos los productos disponibles antes de procesar el pedido, indicando su precio y su stock.

Estructuras utilizadas:

Bucle for: recorre el array productos mediante un índice i.

Operador ternario (? :): comprueba si el stock es cero. Si es así, muestra «Agotado»; en caso contrario, muestra las unidades disponibles.

Plantillas de texto (template literals): permiten mostrar el nombre, el precio y la disponibilidad en una misma línea.

Método toFixed(2): muestra los precios con dos decimales.

2. Procesar el pedido y actualizar el stock

Objetivo: Comprobar cada producto solicitado por el cliente, servir las unidades disponibles y actualizar el inventario.
Estructuras utilizadas:

Bucle for: recorre los arrays pedidoProductos y pedidoCantidades para procesar el pedido línea a línea.

Función buscarProducto(): localiza la posición del producto en el catálogo.

Condicional if / else if / else: permite distinguir entre productos que no existen, productos agotados y productos que pueden servirse.

Condicional if anidada: dentro del bloque else, comprueba si la cantidad solicitada supera el stock disponible.

Variable cantidadServida: guarda las unidades que realmente se van a entregar.

Actualización del stock: resta las unidades servidas de las existencias disponibles.

Método push(): añade al ticket los productos servidos, sus cantidades y sus precios.

Si se solicitan más unidades de las disponibles, el programa sirve únicamente las existencias restantes y muestra un aviso en la consola.

3. Recorrer el ticket y calcular el importe de cada línea

Objetivo: Calcular el importe correspondiente a cada producto que se ha podido servir.

Estructuras y métodos utilizados:

Bucle for: recorre el array ticketProductos para procesar cada línea del ticket.

Función calcularImporteLinea(): multiplica el precio unitario por la cantidad servida.

Variables acumuladoras: subtotal suma los importes de todas las líneas y totalUnidadesServidas acumula las unidades entregadas.

Condicional if: compara el importe de cada línea con maxImporte para identificar el producto con mayor importe.

Plantillas de texto y toFixed(2): permiten mostrar cada línea con el precio y el importe formateados a dos decimales.

4. Encadenar los cálculos matemáticos del ticket

Objetivo: Calcular el descuento, la base imponible, el IVA, los gastos de envío y el importe total que debe pagar el cliente.

Funciones utilizadas:

calcularDescuento(): calcula el descuento aplicable al pedido.

calcularIVA(): calcula el 21 % de IVA sobre la base imponible.

calcularEnvio(): determina si los gastos de envío son gratuitos o si se deben cobrar 4,95 €.

Operaciones realizadas:

Se calcula el subtotal sumando los importes de las líneas del ticket.

Se resta el descuento para obtener la base imponible.

Se calcula el IVA sobre la base imponible.

Se determina el coste del envío.

Se suman la base imponible, el IVA y el envío para obtener el total.

Las funciones devuelven los resultados mediante return, que después se guardan en variables para continuar con los cálculos.

5. Mostrar el desglose del ticket en consola

Objetivo: Presentar el resumen económico del pedido de forma clara y ordenada.

Se muestran el subtotal, el descuento, la base imponible, el IVA, los gastos de envío y el total.

Métodos y estructuras utilizados:

console.log(): muestra los resultados en la consola.

toFixed(2): presenta los importes con dos decimales.

Operador ternario: permite mostrar «Gratis» cuando el envío es gratuito o mostrar su importe cuando tiene coste.

Template literals: facilitan la combinación de textos y valores calculados.

6. Visualizar el stock final

Objetivo: Mostrar las existencias de cada producto después de procesar el pedido e identificar los productos agotados.

Estructuras y métodos utilizados:

Bucle for: recorre el catálogo y muestra el stock actualizado de cada producto.

Condicional if: comprueba si las existencias de un producto son iguales a cero.

Método push(): guarda en el array agotados los nombres de los productos que se han quedado sin existencias.

Método join(", "): muestra la lista de productos agotados separando sus nombres por comas.

7. Implementar un cupón de descuento

Objetivo: Permitir la aplicación de un cupón promocional y mostrar mensajes de confirmación o error.

El cupón utilizado en este ejercicio es BIENVENIDA.

Estructuras utilizadas:

Función calcularDescuento(): recibe el subtotal y el código del cupón como parámetros.

Condicional if: comprueba si el código coincide con BIENVENIDA.

Operador de comparación estricta (===): verifica que el código del cupón coincide exactamente con el esperado.

Condicional if adicional: comprueba si se ha introducido un código distinto del aceptado y muestra un aviso.

return: devuelve el importe del descuento para utilizarlo en los cálculos del ticket.

console.log(): muestra mensajes de confirmación o error.

Si se acepta el cupón, se aplica un descuento del 15 % sobre el subtotal. Si no se utiliza el cupón aceptado, la función puede aplicar los descuentos alternativos previstos según el importe de la compra.

8. Ampliación: resumen del pedido

Objetivo: Mostrar el número total de unidades servidas y el producto con mayor importe en una línea del ticket.

Estructuras y variables utilizadas:

Bucle for: recorre las líneas del ticket.

Variable acumuladora totalUnidadesServidas: suma las cantidades realmente entregadas.

Variable maxImporte: guarda el mayor importe de línea encontrado hasta el momento.

Variable productoMasCaro: almacena el nombre del producto asociado a ese importe.

Condicional if: actualiza ambas variables cuando encuentra una línea con un importe superior al máximo anterior.

Esta ampliación permite obtener un resumen del pedido a partir de los datos del ticket, teniendo en cuenta las cantidades realmente servidas.

9. Ampliación: productos no servidos

Objetivo: Identificar los productos del pedido que no se han servido o de los que se ha entregado una cantidad inferior a la solicitada.

Estructuras y métodos utilizados:

Bucle for exterior: recorre los productos y las cantidades solicitadas por el cliente.

Variables booleanas: encontrado comienza con el valor false y cambia a true si el producto aparece en el ticket.

Variable cantServida: guarda la cantidad que realmente se ha entregado.

Bucle for interior: recorre el ticket para buscar el producto correspondiente al pedido.

Condicional if: compara el nombre del producto con las líneas del ticket.

Instrucción break: termina la búsqueda cuando se encuentra el producto.

Condicional if / else: distingue entre productos que no se han servido y productos de los que se ha entregado una cantidad insuficiente.

Cálculo de unidades faltantes: resta las unidades servidas a las solicitadas.

Métodos push() y join(): almacenan y muestran los avisos de productos no servidos.

Al finalizar, el programa muestra los productos que no se han podido servir y las unidades que faltan. Si no hay productos pendientes, muestra un mensaje indicando que el pedido se ha servido por completo.

Conceptos de JavaScript practicados

Durante el desarrollo del ejercicio se trabajan los siguientes conceptos:

Arrays y acceso a sus elementos mediante índices.

Bucles for.

Condicionales if, else if y else.

Condicionales anidadas.

Operadores de comparación y operadores ternarios.

Funciones, parámetros y valores devueltos mediante return.

Variables acumuladoras y variables de control.

Métodos indexOf(), push(), join() y toFixed().

Plantillas de texto mediante template literals.

Búsqueda de productos en un catálogo.

Actualización de un inventario.

Cálculos matemáticos encadenados.

Organización del código en bloques funcionales.

Resultado final

El programa permite simular una compra en una tienda de informática, controlar las existencias, calcular el importe de los productos servidos, aplicar descuentos y mostrar un ticket con el desglose económico.

Además, identifica los productos agotados y las unidades que han quedado pendientes de servir.
