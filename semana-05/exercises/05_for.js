/* Crear un array que contenga 5 palabras y recorrer dicho array
utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
var forA1 = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i of forA1) {
    console.log(i);
}

/* Al array anterior convertir la primera letra de cada palabra
en mayúscula y mostrar una alerta por cada palabra modificada. */
var forB1 = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i = 0; i < forB1.length; i++) {
    forB1[i] = (forB1[i].substring(0, 1)).toUpperCase() + (forB1[i].substring(1, forB1[i].length)).toLowerCase();
    console.log(forB1[i]);
}

/* Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir guardando
cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */
var sentence = '';
var forC1 = ['code', 'student', 'classroom', 'computer', 'internet'];

for (var i of forA1) {
    sentence += i;
}
console.log(sentence);

/* Crear una array vacío y con un bucle for de 10 repeticiones.
Llenar el array con el número de la repetición, es decir que al final de la ejecución
del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al
número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */
var forD1 = [];

for (var i = 0; i < 10; i++) {
    forD1[i] = i;
}
console.log(forD1);