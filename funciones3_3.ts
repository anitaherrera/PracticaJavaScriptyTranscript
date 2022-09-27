 //Ejercicio 3.3
//Para una palabra dada, calculamos su puntuación en Scrabble®
//la función recibe un string y devuelve la puntuación correspondiente a la palabra ingresada
function computeScore(word:string):number {
    const letters = word.toUpperCase().split('');
     return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
    }
   //Función a partir de un string devuelve la puntuación
    function getPointsFor(letter:string):number {
    const lettersAndPoints:  = [
    ['AEOIULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
    ];
   
    return lettersAndPoints.reduce((computedScore:any, pointsTuple:any) => {
        const [letters, score] = pointsTuple; //defino una tupla 
    if (letters.split('').find((ll) => ll === letter)) {
    return computedScore += score;
    }
    return computedScore;
    }, 0);
    }
   
    console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);
   // Añadir anotaciones de tipo siempre que sea posible