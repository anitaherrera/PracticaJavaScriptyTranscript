//Ejercicio 2.4
//El propósito de este ejercicio es simplemente ilustrar el uso de ‘readonly‘:
interface EsquemaUsuario {
    readonly id: number;
    nombre: string;
    }
   
    class Usuario implements EsquemaUsuario {
    constructor(public nombre: string, readonly id: number) { }
    }
   
    const usuario = new Usuario('Perro', 1);
   
    console.log(usuario.id); // legible ANA: PRimero tiene el valor que se lo incializo con la creación de la clase
   
    usuario.nombre = 'Harold'; // asignable
    usuario.id = 5; // no asignable ANA: indica que no se puede asignar valor porque es readonly.
   
    console.log('[Ejercicio 2.4]', `Usuario:`, usuario)
   