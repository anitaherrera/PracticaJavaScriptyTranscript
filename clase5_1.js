//Ejercicio 5.1
//Dado el siguiente codigo:
var MC = /** @class */ (function () {
    function MC() {
    }
    MC.prototype.greet = function (event) {
        if (event === void 0) { event = 'party'; }
        return "Bienvenido al ".concat(event);
    };
    return MC;
}());
var mc = new MC();
console.log('[Ejercicio 5.1]', mc.greet(('espectaculo')));
//Añadir tipo de parámetro de forma explícita en método ‘greet‘
//Agregar el tipo de retorno explicito al metodo greet
//Ejercicio 5.2
//Dado el siguiente codigo:
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var jane = new Person('Juan', 31);
console.log('[Ejercicio 5.2]', "El nombre de la nueva persona es ".concat(jane.name, "."));
//Añadir tipos de parámetros explícitos al constructor
//Agregue parámetros con tipos para almacenar valores
