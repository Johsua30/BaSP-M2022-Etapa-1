/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador. */
console.log('\n------------------------------------------------------------\n6.a:')

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(4, 6));

/* A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado. */
console.log('\n------------------------------------------------------------\n6.b:')

function sumNum(num1, num2) {
    if ((typeof(num1) == typeof(varB)) && (typeof(num1) == 'number')) {
        return (sum(num1, num2));
    } else {
        alert('Exercise 6.b: One or both of the parameters is not a number');
        return NaN;
    }
}

console.log(sumNum(4, 'a'));

/* Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero. */
console.log('\n------------------------------------------------------------\n6.c:')

function validateInteger(varA) {
    return Number.isInteger(varA);
}

console.log(validateInteger(5.4));

/* A la función suma del ejercicio 6b) agregarle una llamada que valide que
los números sean enteros. En caso que haya decimales mostrar un alerta con
el error y retorna el número convertido a entero (redondeado). */
console.log('\n------------------------------------------------------------\n6.d:')

function sumNumInteger(varA, varB) {
    if ((typeof(varA) == typeof(varB)) && (typeof(varA) == 'number')) {
        if (Number.isInteger(varA) && Number.isInteger(varB)) {
            return (varA + varB);
        } else {
            alert('Exercise 6.d: One or both of the numbers is not an integer');
            return (Math.round(varA + varB));
        }
    } else {
        alert('Exercise 6.d: One or both of the parameters is not a number');
        return NaN;
    }
}

console.log(sumNumInteger(5, 5.5));

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */
console.log('\n------------------------------------------------------------\n6.e:')

function validateIntegerE(num) {
    return (Number.isInteger(num));
}

function sumNum(varA, varB) {
    if ((typeof(varA) == typeof(varB)) && (typeof(varA) == 'number')) {
        if (validateIntegerE(varA) && validateIntegerE(varB)) {
            return (varA + varB);
        } else {
            alert('Exercise 6.e: One or both of the numbers is not an integer');
            return (Math.round(varA + varB));
        }
    } else {
        alert('Exercise 6.e: One or both of the parameters is not a number');
        return (NaN);
    }
}

console.log(sumNum(5, 5.5));