"use strict";
// agregar alias de tipo(s) aqui
class Bird {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}
;
class Fish {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return (animals[Math.floor(Math.random() * animals.length)]);
}
getRandomAnimal();
function interrogateAnimal(animal = getRandomAnimal()) {
    if (animal instanceof Bird) {
        animal.fly(10);
    } // se llama solo si es un pajaro
    else {
        animal.swim(10);
    } // se llama solo si es un pez
    return animal.species;
}
console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
//Restrinja el tipo de ‘valor‘ a ‘string o number‘
//Solucione cualquier error resultante