//Dado el siguiente codigo:
//Añadir anotaciones de tipo (lo más explícitas posible)
//Solucionar errores (si corresponde)
const secuencia = Array.from(Array(10).keys());// Arreglo con los valores de 0 a 9, de long 10
const animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa']; //Arreglo con las cadenas detalladas.
const cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres']; // Arreglo de enteros y cadenas.
const todosMisArreglos = [secuencia, animales, cadenasYNumeros]; // Junto los tres arreglos
console.log('Ejercicio 1.5', todosMisArreglos); // Muestro los arreglos anidados. 