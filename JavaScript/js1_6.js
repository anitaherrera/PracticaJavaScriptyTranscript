//Queremos representar un elemento de inventario como una estructura donde la primera entrada
//es el nombre del artículo y la segunda es la cantidad.
//Dado el siguiente codigo:
//Añadir anotaciones de tipo (lo más explícitas posible)
//Solucionar errores (si corresponde)
//const elementoInventario = ['tuerca', 11]; // Defino un arreglo con una descripción y una entero que respresenta una cantidad.

 // despues lo desestructuramos
 //const [nombre, cantidad] = elementoInventario; 
 //const mensaje = agregarInventario(nombre, cantidad); //llamo a una función agregarInventario con las dos variables.

 //console.log('[Ejercicio 1.6]', mensaje); // Muestro el mensaje que se indica en la función.

 //function agregarInventario(nombre, cantidad) {
 //return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
 //}

 //Para suprimir algunas líneas puedo usar la función flecha.
 const elementoInventario = ['tuerca', 11];
 const [nombre, cantidad] = elementoInventario; 
 const mensaje = (nombre, cantidad) => 'Se agregron '+ cantidad +' '+ nombre +' al inventario'; //llamo a una función agregarInventario con las dos variables.
 console.log(mensaje (nombre, cantidad)); // Muestro el mensaje que se indica en la función.
