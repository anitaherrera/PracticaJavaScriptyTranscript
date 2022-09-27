//Ejercicio 5.5 - 
//Dado el siguiente codigo:
class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { } 
     }
    
    
     class Desk extends Furniture {
     kind() {
     console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por `, super.manufacturer);
      console.log ()
     }
     }
    
     class Chair extends Furniture {
     kind() {
     console.log('[Ejercicio 5.5]', `Esta es una silla hecha por `, super.manufacturer);
     }
     }
    
     const desk = new Desk();
     desk.kind();
     
     //desk.manufacturer; // debe devolver error //Ana: Devuelve error ya que manufacturer está como atributo privado
    
     const chair = new Chair();
     chair.kind();
     //chair.manufacturer; // debe devolver error //Ana: Devuelve error ya que manufacturer está como atributo protected solo se puede acceder desde las clase que extienden 
     
    // Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante