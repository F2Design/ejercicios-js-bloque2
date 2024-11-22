/* 
Ej 15

Muestra la suma y la media de los números introducidos,
hasta introducir un número negativo y ahí mostrar el resultado.

*/

// Mi solucion

// let suma = prompt('Introduce un numero cualquiera');

// Variables para la suma total y el contador de números
/* let sumaTotal = 0;
let contador = 0; */

/* // Bucle para pedir números
while (true) {
    // Pedir un número al usuario
    // let numero = parseFloat(prompt("Introduce un número (negativo para terminar):"));
    
    // Verificar si el número es negativo
    if (numero < 0) {
        break; // Salimos del bucle
    }

    // Si el número es positivo, añadirlo a la suma y aumentar el contador
    sumaTotal += numero;
    contador++;
} */

// Calcular la media (si se introdujeron números)
/* let media = contador > 0 ? sumaTotal / contador : 0; */

/* console.log('La suma de los números introducidos es: ' + sumaTotal);
console.log('La media de los números introducidos es: ' + media); */


// Solucion Curso
let suma = 0;
let numero = 0;
let ejecuciones = 0;

do {
    //A numero le asigno un valor que viene dado por un prompt, en cada iteracion que se le pregunte al usuario ingrese un numero hasta que no se cumpla la condicion que sea un numero negativo
    numero = parseInt(prompt('Dime numeros hasta que pongas uno negativo', 0)); // parseInt para sumer numeros y no strings

    //Hare una comprobacion si el usuario no ingresa un numero isNaN, entonces iguale el numero a 0
    if(isNaN(numero)) {
        numero = 0; // 0 para que no se sume una letra o caratcer, solo numero. Que el numero sea 0 y se sume 0

      //SiNo se cumple la condicion debo comprobar si el numero introducido es mayor o igual a 0  
    }else if(numero >= 0) {

        suma += numero; // al total de la suma, le sumo a suma '+=' lo que ya tenga mas el numero que haya introducido es decir 
        // suma = suma + nuevo numero

        ejecuciones++; // Si se cumple le sumamos 1 para que se cuente esa operacion que se esta haciendo
    }


} while (numero >= 0);

alert('La suma de los numeros es: ' + suma);
alert('La media de los numeros es: ' + ( suma / ejecuciones )); // la suma entre el numero de numeros introducido, lo que ejecuta el blucle
