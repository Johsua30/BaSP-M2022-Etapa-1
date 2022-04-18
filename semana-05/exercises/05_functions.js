/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador. */
function sum(varA, varB) {
    return varA + varB;
}

console.log(sum(4, 6));

/* A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado. */
function sumNum(varA, varB) {
    if ((typeof(varA) == typeof(varB)) && (typeof(varA) == 'number')) {
        return (varA + varB);
    } else {
        alert('One or both of the parameters is not a number');
        return NaN;
    }
}

console.log(sumNum(4, 'a'));

/* Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero. */
function validateInteger(varA) {
    if (Number.isInteger(varA)) {
        return true;
    } else {
        return false;
    }
}

console.log(validateInteger(5.4));

/* A la función suma del ejercicio 6b) agregarle una llamada que valide que
los números sean enteros. En caso que haya decimales mostrar un alerta con
el error y retorna el número convertido a entero (redondeado). */
function sumNumD(varA, varB) {
    if ((typeof(varA) == typeof(varB)) && (typeof(varA) == 'number')) {
        if (Number.isInteger(varA) && Number.isInteger(varB)) {
            return (varA + varB);
        } else {
            alert('One or both of the numbers is not an integer');
            return (Math.round(varA) + Math.round(varB));
        }
    } else {
        alert('One or both of the parameters is not a number');
        return NaN;
    }
}

console.log(sumNumD(5, 5.5));

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */
function validateIntegerE(varA, varB) {
    if (Number.isInteger(varA) && Number.isInteger(varB)) {
        return (varA + varB);
    } else {
        alert('One or both of the numbers is not an integer');
        return (Math.round(varA) + Math.round(varB));
    }
}

function sumNumE(varA, varB) {
    if ((typeof(varA) == typeof(varB)) && (typeof(varA) == 'number')) {
        return (validateIntegerE(varA, varB));
    } else {
        alert('One or both of the parameters is not a number');
        return NaN;
    }
}

console.log(sumNumE(5, 'a'));