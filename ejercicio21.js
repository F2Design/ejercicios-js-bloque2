/* 
Ej 21

Calculadora:
Pida dos numeros por pantalla al usuario.
Si se ingresa un numero mal que lo vuelva a pedir en una alerta y por la consola mostrar el resultado de sumar, restar, dividir y multiplicar esos dos numeros.

*/

//Mi Solucion

// Paso 1: Función para solicitar un número válido al usuario
function pedirNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

// Paso 2: Solicitar los dos números al usuario
let numero1 = pedirNumero("Ingresa el primer número:");
let numero2 = pedirNumero("Ingresa el segundo número:");

// Paso 3: Realizar las operaciones y mostrar los resultados
console.log(`Los resultados de las operaciones son:
- Suma: ${numero1 + numero2}
- Resta: ${numero1 - numero2}
- Multiplicación: ${numero1 * numero2}
- División: ${numero1 / numero2}`);

// Solucion Curso

/* let num1;
let num2;
// let numero;

//Hacemos una primera comprobacion
while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) { //Si se cumple cualquiera de estas condiciones preguntaremos al usuario que numeros quire y ponerlos bien
    
    num1 = parseInt(prompt("Ingresa un numero: "));
    num2 = parseInt(prompt("Ingresa otro numero: "));
}

// Creamos una variable con el resultado
let resultado = `
    Suma:${num1+num2}
    Resta:${num1-num2}
    Multiplicacion:${num1*num2}
    Division:${num1/num2}
    Resto:${num1%num2}
`;

alert(resultado);
console.log(resultado); */

// document.write(resultado); //Para ver en pantalla
