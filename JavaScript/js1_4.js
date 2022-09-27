//Dado el siguiente codigo:
//Añadir anotaciones de tipo (lo más explícitas posible)
//Solucionar errores (si corresponde)
const entero = 6;
const decimal = 6.66;
const hexadecimal = 0xf00d;
const binario = 0b1010011010;
const octal = 0o744;
const ceroNegativo = -0;
const enRealiadadNumero = NaN;
const mayorNumero = Number.MAX_VALUE;
const elNumeroMasGrande = Infinity;


var miembros = 
  {
     any : [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande] }

    console.log('[Antes]', miembros);
miembros.any[0] = parseInt('12345');

console.log('[Ejercicio 1.4]', miembros );