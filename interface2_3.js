///FUNCIONA PERO SEGURO HAY UNA MEJOR FORMA DE REFACTORIZARLO
//Ejercicio 2.3
//Dado el siguiente codigo:
// [no editar] (pretender que esto proviene de una version externa de la
// biblioteca `foo.d.ts`)
// [/no editar]
var montreal = {
    coords: {
        latitud: 42.332,
        longitud: -73.324
    },
    nombre: 'Montreal'
};
var tampa = {
    coords: {
        latitud: '27.9478',
        longitud: '-82.4584'
    },
    nombre: 'Tampa'
};
function informacionCiudad(ciudad) {
    var lat;
    var long;
    var keys = '';
    for (var _i = 0, _a = Object.keys(ciudad); _i < _a.length; _i++) {
        var k = _a[_i];
        if (typeof (ciudad.coords.latitud) == 'string') {
            lat = parseInt(ciudad.coords.latitud);
        }
        else {
            lat = ciudad.coords.latitud;
        }
        if (typeof (ciudad.coords.longitud) == 'string') {
            long = parseInt(ciudad.coords.longitud);
        }
        else {
            long = ciudad.coords.latitud;
        }
        keys += k;
    }
    var coord = [lat.toFixed(3), long.toFixed(3)];
    // `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
    return "".concat(ciudad.nombre.toUpperCase(), " se encuentra en ").concat(coord);
}
console.log('[Ejercicio 2.3]', "".concat(informacionCiudad(montreal), " \n\n "));
console.log("".concat(informacionCiudad(tampa)));
//console.log (typeof (tampa))
// Cree una interfaz ‘Coords‘ que tenga las propiedades numéricas ‘latitud‘ y ‘longitud‘
// Extienda la interfaz existente ‘Ciudad‘ (sin modificarla en línea) agregando una propiedad
//‘coords‘ de tipo ‘Coords‘
// Corregir lo que está mal con ‘tampa‘
