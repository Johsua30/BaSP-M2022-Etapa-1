/* Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase). */
var stringsA1 = 'a lower case string';
var stringsA2 = stringsA1.toUpperCase();

console.log(stringsA2);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring). */
var stringsB1 = 'A long string';
var stringsB2 = stringsB1.substring(0, 5);

console.log(stringsB2);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres guardando el
resultado en una nueva variable (utilizar substring). */
var stringsC1 = 'String with a lot of characters';
var stringsC2 = stringsC1.substring((stringsC1.length - 1), stringsC1.length - 4);

console.log(stringsC2);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás
en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */
var stringsD1 = 'this IS a STRING.';
var stringsD2 = (stringsD1.substring(0, 1)).toUpperCase() + (stringsD1.substring(1, stringsD1.length)).toLowerCase();

console.log(stringsD2);

/* Crear una variable de tipo string con al menos 10 caracteres y algún
espacio en blanco. Encontrar la posición del primer espacio en blanco y
guardarla en una variable (utilizar indexOf). */
var stringsE1 = 'Find the position of the first space';
var stringsE2 = stringsE1.indexOf(' ');

console.log(stringsE2);

/* Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var stringsF1 = 'rAdIuM rOcKeT';
var stringsF2 = stringsF1.substring(0, 1).toUpperCase() +
stringsF1.substring(1, (stringsF1.indexOf(' ') + 1)).toLowerCase() +
stringsF1.substring((stringsF1.indexOf(' ') + 1), (stringsF1.indexOf(' ') + 2)).toUpperCase() +
stringsF1.substring((stringsF1.indexOf(' ') + 2), stringsF1.length).toLowerCase();

console.log(stringsF2);