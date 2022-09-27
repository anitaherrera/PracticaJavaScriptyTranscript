//Ejercicio 5.6 ANA: NO lo pude resolver
//Dado el siguiente codigo:
var Student = /** @class */ (function () {
    //public school: string = 'Harry Herpson High School';
    function Student(name, school) {
        this.name = name;
        this.school = school;
        this.name = name;
        this.school = 'Harry Herpson High School';
    }
    ;
    Student.prototype.introduction = function () {
        console.log('[Ejercicio 5.6]', "Hola, mi nombre es ", this.name, " y asisto a ", $, { Student: Student, : .school });
    };
    return Student;
}());
var student = new Student('Morty', '');
console.log(student.school);
student.introduction();
// Elimine el error sin cambiar las referencias a ‘Student.school‘
