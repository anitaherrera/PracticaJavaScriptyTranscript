"use strict";
//Dado el siguiente codigo:
function padLeft(value, padding) {
    if (typeof (padding) == 'number') {
        return (`${Array(padding + 1).join(' ')}${value}`);
    }
    else
        return padding + value;
}
console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);
//Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘
