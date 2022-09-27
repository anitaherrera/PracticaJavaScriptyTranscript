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
     type birdLike=string
     type fishLike= string
     let birdLike=['puffin','kittiwake']
     let fishLike=['sea robin','leafy seadragon']
     
    const animals = [
    new Bird('puffin'),
    new Bird('kittiwake'),
    new Fish('sea robin'),
    new Fish('leafy seadragon'),
    ];
   
    return animals[Math.floor(Math.random() * animals.length)];
    }
   
   
    function interrogateAnimal(animal = getRandomAnimal()) {
                     if (animal instanceof  Bird){let pajaro=animal as Flyer
                                         pajaro.fly(10)} // se llama solo si es un pajaro
                else {let peces=animal as Swimmer
                      peces.swim(10) }// se llama solo si es un pez
            return animal.species;
       }
   
    console.log('[Ejercicio 4.4]',
    `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
   
   // Las aves y los peces ponen huevos. 
   //Sólo los pájaros vuelan. 
   //Sólo los peces nadan. Defina
   //dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
   // Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘ -> Comentario Ana: Hice un casteo
   //Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
   //volar
   //Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible
   
   
   