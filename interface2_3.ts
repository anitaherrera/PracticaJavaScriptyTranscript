///FUNCIONA PERO SEGURO HAY UNA MEJOR FORMA DE REFACTORIZARLO
//Ejercicio 2.3
//Dado el siguiente codigo:
 // [no editar] (pretender que esto proviene de una version externa de la
 // biblioteca `foo.d.ts`)

 interface Coords{  //ANA-> Definí interface
    latitud:number|string
    longitud:number|string

      }


 interface Ciudad  {
    nombre: string;
    coords:Coords
      }
       // [/no editar]


 const montreal = {
 coords: {
 latitud: 42.332,
 longitud: -73.324,
 },
 nombre: 'Montreal',
 };


 
 const tampa = {
 coords: {
 latitud: '27.9478',
 longitud: '-82.4584',
 },
 nombre: 'Tampa',
 };



 function informacionCiudad(ciudad: Ciudad) {
     var lat:number
     var long:number
      let keys = '';
      for (let k of Object.keys(ciudad)) {
        if(typeof(ciudad.coords.latitud)=='string'){  lat =parseInt (ciudad.coords.latitud)}
        else {lat=ciudad.coords.latitud}
        if (typeof(ciudad.coords.longitud)=='string'){ long =parseInt (ciudad.coords.longitud)}
        else {long=ciudad.coords.latitud}
       keys += k;
           }
   
                const coord=[lat.toFixed(3),long.toFixed(3)]
                // `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
                return `${ciudad.nombre.toUpperCase()} se encuentra en ${coord}`;
 }

 console.log('[Ejercicio 2.3]',
 `${informacionCiudad(montreal)} \n\n `);
 console.log (`${informacionCiudad(tampa)}`)
 
//console.log (typeof (tampa))

// Cree una interfaz ‘Coords‘ que tenga las propiedades numéricas ‘latitud‘ y ‘longitud‘
// Extienda la interfaz existente ‘Ciudad‘ (sin modificarla en línea) agregando una propiedad
//‘coords‘ de tipo ‘Coords‘
// Corregir lo que está mal con ‘tampa‘
