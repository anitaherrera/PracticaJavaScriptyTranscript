//Ejercicio 2.2
//Dado el siguiente codigo:
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
var juan = new Persona('Juan', 31);
console.log('[Ejercicio 2.2]', "".concat(juan.nombre, " tiene ").concat(juan.edad, " anios."));
// Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
//a las propiedades miembros ‘nombre‘ y ‘edad‘
