/* 
Ej 20

En base a un numero que ingrese el usuario, decir si es par o impar

*/

//Mi Solucion

// Paso 1: Solicitar el número al usuario
/* let numero = parseInt(prompt('Ingresa un numero para ver si es par o impar: '));


if (isNaN(numero)) {
  // Validar que el usuario ingresó un número válido

    alert("Ingresa un numero valido");

  // Paso 2: Verificar si es par o impar. Usamos el operador % para obtener el residuo de la división entre 2.
} else if( numero % 2 === 0){

    // Si el residuo es 0, el número es par; si no, es impar.
    alert(`El numero ${numero} es par`);

} else {
    alert(`El numero ${numero} es impar`);
} */


// Solucion Curso

let numero; // Si defino la funcion aqui afuera y asigno el valor en el bloque while, no necesito definirla aqui afuera como los ejercicios anteriores

while (isNaN(numero)) {
    
    numero = parseInt(prompt("Ingresa un numero para ver si es par o impar: ", 0));
}

if ( numero % 2 === 0) { //Si % el # en 2 y su resto es 0 es numer par

    alert(`El numero ${numero} es par`);
} else {

    //De lo contrario el numero sera impar
    alert(`El numero ${numero} es impar`);
}