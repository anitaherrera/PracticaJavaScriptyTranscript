//Ejercicio 5.4
//Dado el siguiente codigo:
class Animal {
    private name:string
 
 constructor(name:string) {this.name=name }

 move(meters:number | undefined| null) {
       console.log(`${this.name} se movio ${meters}m.`);
              }
 }

 class Snake extends Animal {
 move(meters:number | undefined| null ) {
 console.log('Deslizandose...')
   if (typeof(meters)== "undefined"){super.move(5)}
            else {super.move(meters)}
 
 
 // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
 // de 5 metros
 }
 }

 
 class Pony extends Animal {
 move(meters: number | undefined| null) {
 console.log('Galopando...');
            if (typeof(meters)== ("undefined")){super.move(60)}
            else {super.move(meters)}
 // debe invocar al metodo `move` del padre con un galope predeterminado
 // de 60 metros
 }
 }

 // La clase Animal no debe ser instanciable.
 // Eliminar o comentar una vez que se logra el error deseado.
 //const andrew = new Animal("Andrew el Animal"); ana: esta clase no puede ser instamciada
 //andrew.move(5);

 const sammy = new Snake("Sammy la serpiente");
 sammy.move();
 
 //console.log(sammy.name); // debe devolver error Ana:Devuelve error porque ahora name es private y accesible por la clase, lo comenté

 const pokey = new Pony("Pokey el pony");
 pokey.move(34);
 //console.log(pokey.name); // Should devolver error  Ana:Devuelve error porque ahora name es private y accesible por la clase, lo comenté

// Añadir tipos
// Hacer que la clase Snake herede de Animal- listo
// Hacer que la clase Pony herede Animal - listo