"use strict";
//Dado el siguiente codigo:
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10]; // Si hago un typeof
// dice que es un object, si posicionno sobre la constante dice que acepta (number | number [])[]
function flatten(array) {
    const flattened = [];
    for (const element of array) { //se inspecciona cada elemento del arreglo
        if (Array.isArray(element)) { //Se consulta si el elemento inspeccionado es un arreglo
            element; // any[] //Ingresa por esta rama cuando es [44,55] y [77,88]
            flattened.push(...element); //Agrega el contenido de ese arreglo al aarreglo flattened de modo que quede como number
        }
        else {
            element; // any ingresa por esta rama cuando el contenido del arreglo es number
            flattened.push(element);
        }
    }
    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers); // devuelve un arreglo : any
//devuelve array: number ->  [1, 2, 3, 44, 55, 6, 77, 88, 9, 10] no están más los arreglos anidados.
//
// Añadir anotaciones de tipo (‘any‘ excluido)
// Inspeccione el tipo de ‘element‘ en diferentes ramas de código
// Bonificación: convertir ‘flatten‘ en una función genérica
