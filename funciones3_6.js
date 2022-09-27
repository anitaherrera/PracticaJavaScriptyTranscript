//Ejercicio 3.6
//Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
//funciones.
var multiply;
var capitalize;
multiply = function (val1, val2) { return val1 * val2; };
capitalize = function (val) { return "".concat(val.charAt(0).toUpperCase()).concat(val.slice(1)); };
console.log('[Ejercicio 3.6]', capitalize("habil ".concat(multiply(5, 10))));
//Arreglar los errores
