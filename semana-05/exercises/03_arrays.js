/* Dado el siguiente array: ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
console.log('\n------------------------------------------------------------\n3.a:')

var arrayMonths = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];

console.log(arrayMonths[4] + ' ' + arrayMonths[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log('\n------------------------------------------------------------\n3.b:')

var arrayMonthsToSort = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];

console.log(arrayMonthsToSort.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */
console.log('\n------------------------------------------------------------\n3.c:')

var arrayMonthsToAdd = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];

arrayMonthsToAdd.unshift('Years');
arrayMonthsToAdd.push('Months');
console.log(arrayMonthsToAdd);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log('\n------------------------------------------------------------\n3.d:')

var arrayMonthsToDelete = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];

arrayMonthsToDelete.shift();
arrayMonthsToDelete.pop();
console.log(arrayMonthsToDelete);

/* Invertir el orden del array (utilizar reverse). */
console.log('\n------------------------------------------------------------\n3.e:')

var arrayE = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];

console.log(arrayE.reverse());

/* Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join). */
console.log('\n------------------------------------------------------------\n3.f:')

var arrayMonthsToJoin = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];
var arrayMonthsJoined = arrayMonthsToJoin.join('-');

console.log(arrayMonthsJoined);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
console.log('\n------------------------------------------------------------\n3.g:')

var arrayMonthsToShorten = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "Dicember"];
var arrayMonthsShortened = arrayMonthsToShorten.slice(4, 11);

console.log(arrayMonthsShortened);