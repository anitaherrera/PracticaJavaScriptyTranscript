//Ejercicio 3.4
//Dado el siguiente codigo:
function greet(greeting:string|undefined ):string { //Puede venir un string ó un undefined, devuelve una cadena
    if (typeof(greeting) =='undefined'){let greeting: string= 'hola'  //agregué un if para preg que tipo es el parámetro greeting. En //caso de que sea UNDEFINED que deuvelva Hola.
                    return(greeting.toUpperCase())}
 else {return(greeting.toUpperCase())}
}

const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
// Añadir tipos explícitos a los parámetros y tipo de retorno
// Añadir un saludo predeterminado: ”hola”