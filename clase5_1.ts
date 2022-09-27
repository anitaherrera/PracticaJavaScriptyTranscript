
//Ejercicio 5.1
//Dado el siguiente codigo:
class MC {
    greet(event:string = 'party'):string { //en esta agregue los tipos
return `Bienvenido al ${event}`;
}
}
const mc = new MC();
console.log('[Ejercicio 5.1]', mc.greet(('espectaculo'));
//Añadir tipo de parámetro de forma explícita en método ‘greet‘
//Agregar el tipo de retorno explicito al metodo greet


//Ejercicio 5.2
//Dado el siguiente codigo:
class Person {
  name:string
  age:number
constructor(name:string, age:number) {
this.name = name;
this.age = age;
}
}

const jane = new Person('Juan', 31);

console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);
//Añadir tipos de parámetros explícitos al constructor
//Agregue parámetros con tipos para almacenar valores