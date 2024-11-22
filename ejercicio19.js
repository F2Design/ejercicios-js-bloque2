/* 
Ej 18

Muestra todos los numeros divisores de un numero, introduce en un promp.

*/


/* // Paso 1: Solicitar el número al usuario con validación
let numero = parseInt(prompt('Ingresa un numero para encontrar sus divisores: ', 0));
// console.log("Ingresa un numero para encontrar sus divisores");

// Validar que el usuario ingresó un número válido
if (isNaN(numero)) { // 1ra. Condicion

    alert('Ingresa un numero valido');
} else {
  // Paso 2: Encontrar y mostrar los divisores
    alert(`Los divisores de ${numero} son: `);
}

for (let i = 1; i <= numero; i++) {
    // Verificar si 'i' es un divisor
    if (numero % i === 0) {
        
        alert(i);
        console.log(i);
    } 
} */

// Solucion Curso

let numero = parseInt(prompt('Ingresa un numero para encontrar sus divisores: ', 1));
// console.log("Ingresa un numero para encontrar sus divisores");


// Con for recorremos el numero completo
// 1ro Inicializacion, el contador en 1, 2do Condicion, si el contador es <= al numero ingresado es true se ejecuta y sigue creciendo, aqui comprueba, luego va incrementando en 1 el contador
for (let contador = 1; contador <= numero; contador++) {

    if ( numero % contador == 0 ) { //Si se cumple la condicion, que el numero ingresado al % entre el contador, su RESTO da exactamente = a 0, significaria que es un numero divisor
        console.log(`el ${contador} es divisor de ${numero}`);
    }
}
