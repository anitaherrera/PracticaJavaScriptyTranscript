//Ejercicio 3.4
//Dado el siguiente codigo:
function greet(greeting) {
    if (typeof (greeting) == 'undefined') {
        var greeting_1 = 'hola'; //agregué un if para preg que tipo es el parámetro greeting. En //caso de que sea UNDEFINED que deuvelva Hola.
        return (greeting_1.toUpperCase());
    }
    else {
        return (greeting.toUpperCase());
    }
}
var defaultGreeting = greet();
var portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
// Añadir tipos explícitos a los parámetros y tipo de retorno
// Añadir un saludo predeterminado: ”hola”
