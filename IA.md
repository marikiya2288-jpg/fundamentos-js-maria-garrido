Maria Garrido Ramon
EJERCICIO 1;
 he usado la IA para comprobas si el calculo matematico estaba bien, y a la hora de calcular el raton me daba varios decimales y le he preguntado sobre to.Fixed porque al ponerlo en console.log los numeros habian cambiado a blacon como si fueran string, y me resolvio la duda de que al acortar decimales lo toma como texto.
 
EJERCICIO 2; he usado la IA Gemini para que me ayudara a plantear el ejercicio bien, el planteamiento lo estaba haciendo bien pero el orden del calculo lo estaba haciendo mal, me ha costado sacarlo. tambien me ha dado la opcion del operador ternario en el ultimo console.log para que saliera la palabra gratis.

EJERCICIO 3; EXPLORAR CATALOGO; aqui use chat gpt;
Dudas trabajadas
Arrays paralelos: como relacionar los productos, sus precios y las unidades disponibles en stock.
Condicionales if:identificar los productos agotados y mostrar un mensaje diferente cuando el stock es cero.
Contadores:  contar los productos agotados utilizando una variable y productosAgotados++.
Producto mas caro: comparar precios y actualizar las variables precioMaximo y productoMasCaro.
Valor total del inventario: multiplicar el precio de cada producto por sus unidades disponibles y sumar los resultados usando un acumulador.
Acumuladores: cutilizar valorTotal = valorTotal + (precioUnidad * unidad) sin recurrir al operador +=.
Formato de precios: cutilizar .toFixed(2) para mostrar los importes con dos decimales.
Organizacion del codigo: donde declarar las variables, donde colocar los calculos dentro del bucle y donde mostrar los resultados finales.
Objetivo
Comprender la logica del ejercicio, aprender a detectar errores y escribir el codigo de forma autonoma, utilizando la IA como apoyo para resolver dudas.

EJERCICIO 4; USO DE LA IA; BUSCAR-PRODUCTO
He utilizado ChatGPT como apoyo para comprender la logica del ejercicio paso a paso, partiendo de cero y aprendiendo el funcionamiento del codigo antes de escribirlo por mi cuenta.

chatgpr me ha ayudado a entender:
Com funciona el bucle for para recorrer los productos.
Para que sirven las variables busqueda y encontrada.
Por que encontrada empieza en -1 y como encontrada = i guarda la posicion del producto encontrado.
Como funcionan break, if y else en la busqueda.
La diferencia entre comprobar cada producto dentro del bucle y comprobar el resultado una vez finalizado.
Como utilizar toLowerCase() para realizar busquedas sin distinguir entre mayusculas y minusculas.

EJERCICIO 5 ; FUNCIONES OBLIGARORIAS;
Mis preguntas a la IA;

«Me da error en la llave, pero no sé por qué».
«fundamentos-js-maria-garrido\ejercicio-5\funciones.js:60 ... SyntaxError: Unexpected token '{'».
Lo que aprendí: que faltaba if antes de la condición y cómo interpretar un error de sintaxis.
Buscar producto

Mis preguntas:
«El último ejercicio de buscar producto, ¿me lo explicas?»
«Me está devolviendo el nombre, no -1»
«console.log(buscarProducto(productos, "Raton")); me dice -1. ¿Por qué?».

Lo que aprendí: a utilizar length correctamente, evitar el punto y coma después del for, llamar a la función con los argumentos dentro de sus paréntesis y comprobar que el texto buscado coincide con el del array. También entendí que -1 significa que el producto no se encuentra.
Probar las funciones con datos diferentes

Mis preguntas:

«En estos casos, ¿cómo llamo a la función con distintos datos para mostrar los resultados?»
«¿Y en el valor total del inventario?»
«¿Y en el stock?».
Lo que aprendí: a llamar varias veces a cada función con distintos argumentos y arrays para comprobar que funciona correctamente.


EJERCICIO 6:   PLANTEAMIENTO CLAUDE
le  pego el ejercicio completo par que me explique que tengo que hacer;

Cómo resolver el ejercicio 6, paso a paso
0. Antes de empezar

En el enunciado pone constpedidoProductos y constpedidoCantidades todo junto. Hay que separarlos con un espacio (const pedidoProductos). Si no, el programa da error.

1. Primero, las funciones

Cada una recibe datos y devuelve (return) un resultado. Ninguna muestra nada por pantalla.

Función	Recibe	Devuelve
buscarProducto	nombre del producto	su posición en productos, o -1 si no está (fíjate en cómo funciona indexOf)
calcularImporteLinea	precio y cantidad	precio × cantidad
calcularDescuento	subtotal	el importe del descuento, no el porcentaje. Mira primero si pasa de 100 y después si pasa de 50. En el orden contrario, 652 € entraría en la regla del 5 %.
calcularIVA	base imponible	base × 0.21
calcularEnvio	base imponible	0 si es 50 o más, si no 4.95

Si las haces así, cada función tiene una sola tarea y puedes probarla por separado.

2. Mostrar el catálogo

Haz un bucle sobre productos y usa la misma posición i para sacar el precio y el stock. Así funcionan los arrays paralelos: la posición i de los tres arrays habla del mismo producto.

3. Procesar el pedido (la parte central)

Antes del bucle, crea tres arrays vacíos para el ticket: ticketProductos, ticketCantidades y ticketPrecios.

Después recorre el pedido. En cada línea:

Busca la posición con buscarProducto.
Comprueba cada caso en este orden con if / else if:
Si la posición es -1 → aviso de que no existe. No añades nada al ticket.
Si el stock es 0 → aviso de que está agotado. No añades nada.
Si piden más de lo que hay → aviso, y la cantidad servida es el stock que haya.
En cualquier otro caso → OK, es la pedida.
Si se ha servido algo:
Resta la cantidad servida de stock[posicion].
Haz .push() del nombre, la cantidad servida y el precio en los arrays del ticket.

El orden importa porque si el producto no existe, la posición es -1 y stock[-1] no tiene sentido. Por eso esa comprobación va la primera.

4. El ticket
Recorre los arrays del ticket. En cada vuelta calcula el importe con calcularImporteLinea, muéstralo y súmalo a un acumulador subtotal que empiece en 0.
Después del bucle, encadena los cálculos:
descuento = calcularDescuento(subtotal)
base = subtotal − descuento
IVA = calcularIVA(base)
envío = calcularEnvio(base)
total = base + IVA + envío
Usa .toFixed(2) solo al mostrar los números. Si lo usas al calcular, el resultado pasa a ser texto y la suma + pegaría los números en vez de sumarlos.
Para el envío: si vale 0, muestra “Gratis”.
5. Stock final
Primer bucle: muestra cada producto con su stock.
Segundo bucle, o el mismo: si el stock es 0, haz .push() del nombre en un array agotados. Al final muéstralo con .join(", ").
Cómo comprobarlo

Compara tu salida con la del enunciado:

El subtotal debe dar 652.79. Si no, el fallo está en el paso 3 (seguramente no sirves 3 monitores).
Si el subtotal está bien pero el total no da 710.89, revisa calcularDescuento.

Si te atascas en algún paso, pásame lo que lleves y lo revisamos.

porque primero empiezas por las funciones en vez del punto 1 que es mostrara catalogo

Porque el orden de los requisitos describe lo que el programa hace al ejecutarse, no el orden en que conviene escribirlo.

Empiezo por las funciones por tres motivos:

El resto del programa las usa. Al procesar el pedido llamas a buscarProducto, y en el ticket a calcularImporteLinea, calcularDescuento, etc. Si las tienes hechas, cuando llegas a esas partes solo tienes que llamarlas.
Se prueban fácil y por separado. Por ejemplo, calcularDescuento(652.79) tiene que dar 65.279, y buscarProducto("Altavoz") tiene que dar -1. Si fallan, sabes que el error está ahí y no en otro sitio. Si lo escribes todo de golpe y el total sale mal, cuesta más encontrar dónde está el problema.
Es lo habitual en un programa organizado: primero se definen las funciones y abajo va la parte que las usa.

Dicho esto, también puedes empezar por mostrar el catálogo. Es lo más sencillo, no depende de ninguna función obligatoria y te sirve para calentar. En el archivo final se va a ejecutar igual: lo primero que aparece en pantalla es el catálogo, porque es lo primero que se llama en la parte principal.

En resumen, el orden en que escribes el código no tiene por qué ser el mismo que el orden en que se ejecuta.

IA EJRCICIO 6 CON GEMINI;
• Mi pregunta: ¿Qué significa console.log("\n");?
• Explicación de la IA: Me aclaró que \n es un carácter especial que representa un "Enter" o salto de línea. Aprendí que no afecta a la lógica matemática del programa, sino que se usa puramente por estética para espaciar los bloques en la terminal (Catálogo, Ticket, Stock) y hacerlos legibles.

2. Duda sobre la Declaración de Funciones

• Mi pregunta: ¿Podemos declarar las funciones con la estructura tradicional (function buscarProducto(nombre) { return ... }) colocándolas al final del archivo?
• Explicación de la IA: Me confirmó que sí y me explicó el concepto de Hoisting. Aprendí que JavaScript registra las funciones en la memoria antes de ejecutar el programa principal. Esto me permitió mantener una estructura limpia: el flujo de la tienda arriba y las "recetas" matemáticas abajo.

3. Duda sobre el funcionamiento de .indexOf()

• Mi pregunta: ¿Qué hace exactamente .indexOf() y cuál es la diferencia con hacerlo mediante un bucle for manual?
• Explicación de la IA: Me enseñó que .indexOf() busca automáticamente en qué "cajón" de un array está un elemento. Si lo encuentra, devuelve su posición (0, 1, 2...), y si no existe, devuelve -1. La diferencia clave es que con .indexOf() JavaScript hace todo el trabajo "bajo el capó" en una sola línea, sin necesidad de crear variables contadoras (let i = 0) ni banderas manuales.

4. Duda sobre la variable base en los cálculos

• Mi pregunta: ¿Por qué usamos la variable base (Base Imponible) en lugar de usar directamente el subtotal para calcular el IVA y el envío?
• Explicación de la IA: Me explicó la lógica comercial de una factura real. El IVA nunca se cobra sobre el subtotal si hay una rebaja, sino sobre el dinero real que queda tras restar el descuento (subtotal - descuento). Entendí la importancia de encadenar los cálculos en un orden cronológico estricto.

5. Duda sobre la barrera de seguridad de los Cupones

• Mi pregunta: ¿Qué significa la condición if (codigoCupon !== undefined && codigoCupon !== "")?
• Explicación de la IA: Aprendí que es un filtro de seguridad. Sirve para que el programa diferencie cuando un cliente introduce un cupón falso (donde sí debe saltar un aviso de error) de cuando el cliente simplemente deja la casilla vacía porque no tiene ningún cupón (donde el programa debe avanzar en silencio sin molestar al usuario).

6. Duda sobre el control de llaves y mensajes repetidos

• Mi pregunta: ¿Por qué el mensaje de "Productos no servidos" se me repetía 5 veces en la terminal?
• Explicación de la IA: Me ayudó a ver que el bloque se había quedado atrapado dentro de las llaves { } del bucle anterior (el del Stock Final). Comprendí que si un comando se mete dentro de un bucle, la máquina lo ejecutará en cada vuelta. Al cerrar correctamente el bucle previo con su llave, conseguí que se mostrara una sola vez al final.

7. Duda sobre la lógica de los Auriculares no servidos

• Mi pregunta: En el pedido final, ¿por qué dice que faltan Auriculares si el cliente no recibió ninguno?
• Explicación de la IA: Me hizo revisar los datos iniciales y comprobar que el stock de Auriculares era 0 desde el principio. Entendí que si el cliente pide 1 unidad y la tienda le sirve 0 por estar agotado, el algoritmo calcula correctamente que "falta 1 unidad por recibir", validando que la lógica de la ampliación funciona a la perfección.