var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Ejercicio 5.4
//Dado el siguiente codigo:
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log("".concat(this.name, " se movio ").concat(meters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function (meters) {
        console.log('Deslizandose...');
        if (typeof (meters) == "undefined") {
            _super.prototype.move.call(this, 5);
        }
        else {
            _super.prototype.move.call(this, meters);
        }
        // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
        // de 5 metros
    };
    return Snake;
}(Animal));
var Pony = /** @class */ (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pony.prototype.move = function (meters) {
        console.log('Galopando...');
        if (typeof (meters) == ("undefined")) {
            _super.prototype.move.call(this, 60);
        }
        else {
            _super.prototype.move.call(this, meters);
        }
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 60 metros
    };
    return Pony;
}(Animal));
// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
//const andrew = new Animal("Andrew el Animal"); ana: esta clase no puede ser instamciada
//andrew.move(5);
var sammy = new Snake("Sammy la serpiente");
sammy.move();
//console.log(sammy.name); // debe devolver error Ana:Devuelve error porque ahora name es private y accesible por la clase, lo comenté
var pokey = new Pony("Pokey el pony");
pokey.move(34);
//console.log(pokey.name); // Should devolver error  Ana:Devuelve error porque ahora name es private y accesible por la clase, lo comenté
// Añadir tipos
// Hacer que la clase Snake herede de Animal- listo
// Hacer que la clase Pony herede Animal - listo
