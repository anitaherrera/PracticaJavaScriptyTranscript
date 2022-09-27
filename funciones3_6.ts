//Ejercicio 3.6
//Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
//funciones.
let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = (val1,val2) => val1*val2;
capitalize = (val) =>`${val.charAt(0).toUpperCase()}${val.slice(1)}`;

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
//Arreglar los errores