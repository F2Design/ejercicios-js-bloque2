/* 
Ej 16

Escribe un programa que muestre la tabla de multiplicar del numero que te diga el usuario.

*/

/* 

Sintaxis:
for (inicialización; condición; actualización) {
    // Bloque de código a ejecutar
}

Componentes del bucle for:
Inicialización: Se ejecuta una vez al inicio del bucle y se utiliza para declarar e inicializar una variable de control.

Condición: Se evalúa antes de cada iteración del bucle. Si es true, el bloque de código dentro del bucle se ejecuta. Si es false, el bucle se detiene.

Incremento: Se ejecuta al final de cada iteración del bucle. Se utiliza para actualizar el contador.
*/

// Mi Solucion

// Pedir al usuario un número
// let numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar: "));

// Mostrar la tabla de multiplicar
// console.log('Tabla de multiplicar del ' + numero);

//Inicia el contador en 1, la condicion hasta o igual a 10 y sale
// for (let contador = 1; contador <= 10; contador++) {

//     let resultado = numero * contador;
//     alert(numero + ' x ' + contador + ' = ' + resultado );
// }


// Solucion Curso

let numero = parseInt(prompt('Introduce un número para mostrar su tabla de multiplicar: '));

let resultadoCompleto = 'Tabla del ' + numero;

//Automatizar la tabla con un bucle
for (let i = 1; i <= 10; i++) {

    // Hacemos la multiplicacion
    let multiplicacion = i * numero;

    // \n o caracteres de escape dentro de los strings, es decir si quiero un salto de linea en cualquiera de las lineas de las operaciones, es el mas comun, como el br de html
    resultadoCompleto += '\n' + i + ' x ' + numero + ' = ' + multiplicacion;
}

alert(resultadoCompleto);
console.log(resultadoCompleto);