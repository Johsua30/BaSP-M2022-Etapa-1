/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje
“Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. */
var randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber >= 0.5) {
    console.log('Greater than 0,5');
} else {
    console.log('Lower than 0,5');
}

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años. */
var age = 57;
if (age < 2) {
    console.log('Baby');
} else { 
    if (age <= 12) {
        console.log('Kid');
    } else {
        if (age <= 19) {
            console.log('Adolescent');
        } else {
            if (age <= 30) {
                console.log('Young adult');
            } else {
                if (age <= 60) {
                    console.log('Adult');
                } else {
                    if (age <= 75) {
                        console.log('Older adult');
                    } else {
                        console.log('Elderly');
                    }
                }
            }
        }
    }
}