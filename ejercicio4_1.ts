//Ejercicio 4.1
//Dado el siguiente codigo:
    interface EggLayer {
    layEggs(): void;
    }

    interface Flyer { 
    fly(height: number): void;
    }

    interface Swimmer {
    swim(depth: number): void;
    }
    
    interface BirdLike {
      species: string | number
               

    }
    interface FishLike{
     species:string | number
      
    
    }
    // agregar alias de tipo(s) aqui
    
    class Bird implements BirdLike {
    
    constructor(public species: string) { }
    
       layEggs(): void {
       console.log('Poniendo huevos de aves.');
                       }
    
       fly(height: number): void {
       console.log(`Volando a la altura de ${height} metros.`); 
       }
       };
    
    class Fish implements FishLike {
        constructor(public species: string) { }
    
        layEggs(): void {
        console.log('Poniendo huevos de pescado.');
         }
    
     swim(depth: number): void {
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
    
       return(animals[Math.floor(Math.random() * animals.length)]);
      }
      

      getRandomAnimal()
     
    function interrogateAnimal(animal = getRandomAnimal()) {
         if (animal instanceof  Bird){animal.fly(10)} // se llama solo si es un pajaro
             else {animal.swim(10) }// se llama solo si es un pez
         return animal.species;
    }
    
    console.log('[Ejercicio 4.4]',
    `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
    //Restrinja el tipo de ‘valor‘ a ‘string o number‘
    //Solucione cualquier error resultante