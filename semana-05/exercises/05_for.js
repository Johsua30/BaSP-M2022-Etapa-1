/* Crear un array que contenga 5 palabras y recorrer dicho array
utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
console.log('\n------------------------------------------------------------\n5.a:')

var array5Words = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i of array5Words) {
    alert('Exercise 5.a: ' + i);
}

/* Al array anterior convertir la primera letra de cada palabra
en mayúscula y mostrar una alerta por cada palabra modificada. */
console.log('\n------------------------------------------------------------\n5.b:')

var array5WordsToCapitalize = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i = 0; i < array5WordsToCapitalize.length; i++) {
    array5WordsToCapitalize[i] = (array5WordsToCapitalize[i].substring(0, 1)).toUpperCase() +
    (array5WordsToCapitalize[i].substring(1, array5WordsToCapitalize[i].length)).toLowerCase();
    alert('Exercise 5.b: ' + array5WordsToCapitalize[i]);
}

/* Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir guardando
cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */
console.log('\n------------------------------------------------------------\n5.c:')

var sentence = '';
var array5WordsToJoin = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i of array5WordsToJoin) {
    sentence += i;
}
alert('Exercise 5.c: ' + sentence);

/* Crear una array vacío y con un bucle for de 10 repeticiones.
Llenar el array con el número de la repetición, es decir que al final de la ejecución
del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al
número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */
console.log('\n------------------------------------------------------------\n5.d:')

var arrayForCounting = [];

for (var i = 0; i < 10; i++) {
    arrayForCounting[i] = i;
}
console.log(arrayForCounting);