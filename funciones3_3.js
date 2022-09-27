//Ejercicio 3.3
//Para una palabra dada, calculamos su puntuación en Scrabble®
//la función recibe un string y devuelve la puntuación correspondiente a la palabra ingresada
function computeScore(word) {
    var letters = word.toUpperCase().split('');
    return letters.reduce(function (accum, curr) { return accum += getPointsFor(curr); }, 0);
}
//Función a partir de un string devuelve la puntuación
function getPointsFor(letter) {
    var lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce(function (computedScore, pointsTuple) {
        var letters = pointsTuple[0], score = pointsTuple[1]; //defino una tupla 
        if (letters.split('').find(function (ll) { return ll === letter; })) {
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}
console.log('[Ejercicio 3.3]', "zoologico vale ".concat(computeScore('zoo'), " puntos."));
// Añadir anotaciones de tipo siempre que sea posible
