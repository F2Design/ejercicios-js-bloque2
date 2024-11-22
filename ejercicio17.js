/* 
Ej 17

Mostrar todos los numeros impares que hay entre 2 numeros que nos de el usuario.

*/

// Funcionamiento:
// Evaluación de la condición: Antes de cada iteración, se evalúa la condición. Si es true, se ejecuta el bloque de código dentro del bucle.
// Ejecución del bloque de código: Si la condición es verdadera, se ejecuta el bloque de código.
// Reevaluación de la condición: Después de ejecutar el bloque de código, se vuelve a evaluar la condición. Si sigue siendo true, se repite el proceso.
// Terminación: Cuando la condición se evalúa como false, el bucle se detiene y la ejecución del programa continúa con la siguiente línea de código después del bucle.


/* let num1 = parseInt(prompt('Ingrese un numero: ', 0)); // Para convertir ese String que me devuelve el prompt en un numero entero con parseInt
let num2 = parseInt(prompt('Ingrese el segundo numero: ', 0)); */

// Identificar el rango: Determina cuál es el menor y cuál es el mayor de los dos números, ya que necesitas iterar entre ellos.
/* let inicio = Math.min(num1, num2);
let fin = Math.max(num1, num2); */
//El método Math.min() es una función que se utiliza para encontrar el valor mínimo entre uno o más números. Este método es parte del objeto Math, que proporciona funciones y constantes matemáticas.
// Sintaxis: 
// Math.min(value1, value2, ..., valueN)
// Parámetros:
// value1, value2, ..., valueN: Son los números que se van a comparar. Puedes pasar tantos argumentos como desees.
// Retorno:
// Devuelve el valor más pequeño de los números proporcionados. Si no se pasan argumentos, devuelve Infinity. Si alguno de los argumentos no es un número, se convierte a número, y si no se puede convertir, se trata como NaN.

/* for (let i = inicio; i < fin; i++) {

    if(i % 2 != 0) {
        alert(i); // Mostrar el número impar
        console.log(i);
    }
} */

// Solucion curso:

let numero1 = parseInt(prompt("Ingrese un numero: ", 0)); // Para convertir ese String que me devuelve el prompt en un numero entero con parseInt
let numero2 = parseInt(prompt("Ingrese el segundo numero: ", 0));

// Hago un bucle, para comprobar si el numero1 es = al numero2 y cada iteracion que el numero 1 vaya sumando 1, en algun momento ver que son iguales
while (numero1 < numero2) {
    
    numero1++; //Le sumo 1 a cada iteracion

    // Veo si el numero es impar o no, si el resto del numero 1 entre 2 es distinto a 0, si el resto de una division da 0 significa que el numero es par, si es distinto a 0 es impar 
    if (numero1 % 2 != 0) { 

        console.log(`El ${numero1} es impar`);
    } 
}