/* 
Ej 13 2do bloque

Tengo un Canguro que salta 3 metros cada vez que salta.
Haz un programa que me diga cuantos saltos ha dado el Canguro, y cual es la distancia total recorrida tras 17 saltos.

*/

// Mi Solucion

console.log("//--- Solucion Curso --//");

// 1. Define los metros por salto
let distanciaSalto = 3;

// 2. Define el número de saltos
let numeroSaltos = 17;

// 3. Variable para acumular la distancia total
let distanciaTotal = 0;

// 4. Usa un bucle for para calcular la distancia
for (let i = 0; i < numeroSaltos; i++) {
    // En cada salto, suma los metros por salto a la distancia    total
    distanciaTotal += distanciaSalto;
}

// 5. Muestra los resultados
console.log("El Canguro ha dado " + numeroSaltos + ' saltos');
console.log('La distancia total recorrida es de ' + distanciaTotal + ' metros');


// Solucion Curso
let distanciaDelSalto = 3;
let saltos = 17;

let distanciaRecorrida = 0; // Variable para acumular la distancia total

// 1. Inicialización, el contador inicia con 1, el primer salto. 2. Condición, el contador de saltos sea <= a los 17 saltos... 3. incremento, ira incrementando en 1 hasta que llegue a los 17 saltos.
for(let contador = 1; contador <= saltos; contador++) {

    distanciaRecorrida += distanciaDelSalto; // a la distanciaRecorrida le ire sumando los 3m que da el canguro en sus saltos. El operador de asignación de suma ( += ) agrega un valor a una variable .

    // console.log('El Canguro ha saltado ' + contador + ' saltos, y ha recorrido ' + distanciaRecorrida + ' metros');
    console.log(`El Canguro ha saltado ${contador} saltos, y ha recorrido ${distanciaRecorrida} metros`);
}