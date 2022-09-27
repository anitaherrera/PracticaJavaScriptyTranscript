//Ejercicio 5.6 ANA: NO lo pude resolver
//Dado el siguiente codigo:
class Student {
    //public school: string = 'Harry Herpson High School';
    
    constructor(private name: string, public school: string) 
    {this.name=name
     this.school='Harry Herpson High School' };
   
    introduction() {
    console.log('[Ejercicio 5.6]', `Hola, mi nombre es `, this.name ,` y asisto a `, ${Student.school)}
   
      }
      
   
    const student = new Student('Morty','');
    console.log(student.school);
   student.introduction(); 
   // Elimine el error sin cambiar las referencias a ‘Student.school‘