/* Dado el siguiente array: ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
var arrayA = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log(arrayA[4] + ' ' + arrayA[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
var arrayB = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log(arrayB.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */
var arrayC = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

arrayC.unshift('Years');
arrayC.push('Months');
console.log(arrayC);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
var arrayD = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

arrayD.shift();
arrayD.pop();
console.log(arrayD);

/* Invertir el orden del array (utilizar reverse). */
var arrayE = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log(arrayE.reverse());

/* Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join). */
var arrayF1 = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
var arrayF2 = arrayF1.join('-');

console.log(arrayF2);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var arrayG1 = ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
var arrayG2 = arrayG1.slice(4, 11);

console.log(arrayG2);