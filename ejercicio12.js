/* 
Ej 12 2do bloque

Haz un programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales.

PLUS: Si los numeros no son un numero o son menores o iguales a cero, no los vuelva a pedir.

*/

//Mi ejercicio
// console.log('//--- Mi Respuesta ---//');

let numero1 = parseInt(prompt('Ingresa el primer numero: ',0)); // Primer numero vendra a 0 - parseInt para convertir ese dato en Entero
let numero2 = parseInt(prompt('Ingresa el segundo numero: ',0));


/* 
if (numero1 < numero2) {
    
    alert(`${numero1} es menor que ${numero2}`);

} else if(numero1 > numero2) {

    alert(`${numero1} es mayor que ${numero2}`);
} else {

    alert(`${numero1} es igual a ${numero2}`)
} 
*/

//
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) { // Condicion, si n1 es <= que 0 volvera a pedir o, n2 es <= 0 si se cumple no lo pedira, o si el dato ingresado en n1 no es un numero NaN() regresa true, si se cumple esta condicion entro al while, o igual para el n2. Si se cumple cualquiera de estas condiciones entrara al bucle para volver a pedir los numeros, para que el usuario los ingrese bien
    numero1 = parseInt(prompt("Ingresa el primer numero: ", 0)); // quito let porque sino asignaria esa variable dentro del bloque y no funcionaria fuera del bloque. Quito el let para hacer una reasignacion de los valores de n1 y n2
    numero2 = parseInt(prompt("Ingresa el segundo numero: ", 0));
}
// isNaN es una función que se utiliza para determinar si un valor es NaN (Not-a-Number). NaN es un valor especial que representa un resultado que no es un número válido, como el resultado de una operación matemática que no tiene sentido (por ejemplo, intentar dividir cero entre cero).
// La función isNaN toma un argumento y devuelve true si el argumento es NaN o si no se puede convertir a un número, y devuelve false si el argumento es un número válido.

// Aqui el programa nos resolvera las preguntas
if (numero1 === numero2) { // 1ra. Condicion

    alert('Los numeros son iguales');

} else if(numero1 > numero2){ // Sino se cumple la primera condicion

    alert('El numero mayor es el: '+numero1);
    alert('El numero menor es el: '+numero2);
} else if(numero1 < numero2){
    
    alert('El numero mayor es el: '+numero2);
    alert('El numero menor es el: '+numero1);
    
} else {

    alert('No has ingresado bien los numeros');
}


//Otra solucion
/* 

// Pedir dos números al usuario
let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));

// Validar los números
if (isNaN(numero1) || numero1 <= 0 || isNaN(numero2) || numero2 <= 0) {
    alert("Uno o ambos números no son válidos. Por favor, recarga la página e intenta de nuevo.");
} else {
    // Comparar los números
    if (numero1 > numero2) {
        alert(`El número mayor es ${numero1} y el menor es ${numero2}`);
    } else if (numero1 < numero2) {
        alert(`El número mayor es ${numero2} y el menor es ${numero1}`);
    } else {
        alert("Ambos números son iguales.");
    }
}

*/