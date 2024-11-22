/* 
Ej 22

Tenemos que despegar con un cohete al espacio y necesitamos una cuenta regresiva de 10 a 0.
Hazlo con el bucle for.

*/

//Solucion Curso


/* 
// console.log("Comienza la cuenta regresiva");
for (let i = 10; i >= 0; i--) {

    console.log(i);
}

console.log('Despegue!!!'); 
*/

// Otra Solucion sin for

// En lugar de un for, crearemos una función que tome como argumento el número de inicio de la cuenta regresiva.
// Esta función mostrará el número actual y programará su próxima ejecución con setTimeout.
console.log('Comienza la cuenta regresiva...');

function cuentaRegresiva(numero) {
    if (numero >= 0) {
      console.log(numero); // Mostrar el número actual
      setTimeout(() => cuentaRegresiva(numero - 1), 1000); // Llamar a la     función nuevamente después de 1 segundo
    } else {
      console.log("¡Despegue!"); // Mensaje final
    }
}

// Iniciar la cuenta regresiva desde 10
cuentaRegresiva(10);