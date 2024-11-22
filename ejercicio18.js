/* 
Ej 18

Tenemos una coleccion de numeros desde el 1 al 17.
El usuario tiene que adivinar cual es el elegido.

Haz un programa para que pueda adivinar el numero.

*/

/* 
// Paso 1: Generar un número aleatorio entre 1 y 17
let numeroAleatorio = Math.floor(Math.random() * 17) + 1;
// Math.floor(Math.random() - Usando ambas para generar números aleatorios.
// Cuando juntas estas dos funciones, puedes generar números aleatorios enteros dentro de un rango.
// Math.floor() es un método que devuelve el valor entero más cercano que es menor o igual al número que se pasa como parámetro.
// Math.random() es una función que genera un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Esto significa que el valor devuelto por Math.random() puede ser cualquier número decimal en el rango de 0 (incluido) a 0.999999... (excluido).

// En otras palabras, Math.floor() "corta" la parte decimal de un número y devuelve solo la parte entera.

// Cómo funciona:

// Math.random() genera un número entre 0 y 1 (ejemplo: 0.45).
// Multiplicamos por 17, obteniendo un número entre 0 y 16.9999 (ejemplo: 7.65).
// Math.floor() redondea hacia abajo, eliminando la parte decimal (ejemplo: 7).
// Sumamos 1 para cambiar el rango de 0-16 a 1-17.

// Paso 2: Mensaje inicial
alert("¡Adivina el número entre 1 y 17!");

// Paso 3: Declarar variable para el intento del usuario
let intento;

// Paso 4: Bucle para pedir intentos hasta que adivine
while (intento !== numeroAleatorio) {
  // Pedir número al usuario
    intento = parseInt(prompt("Ingresa tu intento:"));

    // Validar la entrada
    if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
    } else if (intento < 1 || intento > 17) {
        alert("El número debe estar entre 1 y 17.");
    } else if (intento < numeroAleatorio) {
        alert("El número es mayor.");
    } else if (intento > numeroAleatorio) {
        alert("El número es menor.");
    } else {
        alert("¡Felicidades! Adivinaste el número.");
    }
} 
*/


// Solucion Curso

const numeroAdivinar = 7;

// Tengo que contar el numero de intentos
let intento;

// Cada vez que entro al bucle, preguntar si es igual al numero elegido

// El Bucle se ejecutara mientars que el intento del usuario sera diferente al numero a adivinar
while (intento != numeroAdivinar) {
    
    // Cuando intento y el numeroAdivinar sean iguales el bucle se corta
    // Le preguntamos al usuario, en la var intento, al usuario que nos diga el numero que hay que adivinar, cual es el numero elegido
    intento = parseInt(prompt('Adivina el numero del 1 al 17'));

    // Hacemos una serie de condiciones. == es el operador de igualdad. Comprueba si dos valores son iguales , pero realiza una conversión de tipos si los valores son de tipos diferentes.
    if (numeroAdivinar == intento) {
        alert('Felicitaciones, haz adivinado, era el numero ' + numeroAdivinar);
    } else {
        alert('Sigue intentando');
    }
}
