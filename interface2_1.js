//Ejercicio 2.1
//Dado el siguiente codigo:
// function agregarAlCarro(item: { id: number, titulo: string, idVariante: number }) {
// console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
// }
function agregarAlCarro(item) {
    console.log('[Ejercicio 2.1]', "Agregando \"".concat(item.titulo, "\" al carro de compras."));
}
var item = agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });
;
// Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
//Hacer idVariante opcional
