/* Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase). */
console.log('\n------------------------------------------------------------\n2.a:')

var stringLowercase = 'a lower case string';
var stringUppercase = stringLowercase.toUpperCase();

console.log(stringUppercase);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring). */
console.log('\n------------------------------------------------------------\n2.b:')

var stringComplete = 'A long string';
var stringFirst5 = stringComplete.substring(0, 5);

console.log(stringFirst5);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres guardando el
resultado en una nueva variable (utilizar substring). */
console.log('\n------------------------------------------------------------\n2.c:')

var stringLong = 'String with a lot of characters';
var stringLast3 = stringLong.substring((stringLong.length - 1), stringLong.length - 4);

console.log(stringLast3);

/* Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera letra en mayúscula y las demás
en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */
console.log('\n------------------------------------------------------------\n2.d:')

var stringToCapitalize = 'this IS a STRING.';
var stringCapitalized = (stringToCapitalize.substring(0, 1)).toUpperCase() +
(stringToCapitalize.substring(1, stringToCapitalize.length)).toLowerCase();

console.log(stringCapitalized);

/* Crear una variable de tipo string con al menos 10 caracteres y algún
espacio en blanco. Encontrar la posición del primer espacio en blanco y
guardarla en una variable (utilizar indexOf). */
console.log('\n------------------------------------------------------------\n2.e:')

var stringWithSpace = 'Find the position of the first space';
var spacePosition = stringWithSpace.indexOf(' ');

console.log(spacePosition);

/* Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
console.log('\n------------------------------------------------------------\n2.f:')

var stringWith2Words = 'rAdIuM rOcKeT';
var stringWith2WordsCapitalized = stringWith2Words.substring(0, 1).toUpperCase() +
stringWith2Words.substring(1, (stringWith2Words.indexOf(' ') + 1)).toLowerCase() +
stringWith2Words.substring((stringWith2Words.indexOf(' ') + 1), (stringWith2Words.indexOf(' ') + 2)).toUpperCase() +
stringWith2Words.substring((stringWith2Words.indexOf(' ') + 2), stringWith2Words.length).toLowerCase();

console.log(stringWith2WordsCapitalized);