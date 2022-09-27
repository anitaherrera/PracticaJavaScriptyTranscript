//Ejercicio 3.5
function layEggs(quantity?:number, color?:string):string {
    console.log(
    `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
    }
    layEggs(); // Los parámetros pueden no venir, el retorno va a ser un mensaje por eso le especifiqué string.
   
   
   // Añadir anotación de tipo de parámetro
   // A pesar de que esta función no vuelve, agregue un tipo de retorno explícito