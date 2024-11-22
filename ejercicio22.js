/* 
Ej 22

Tenemos una bolsa con 37 caramelos, cada vez que se come un caramelo, quedan menos.
Haz una simulación de esto con un bucle.

*/

//Mi Solucion

// Paso 1: Definir la cantidad inicial de caramelos
let bolsaCaramelos = 37;

// Paso 2: Usar un bucle para simular comer caramelos
while ( bolsaCaramelos > 0) {
    
    console.log(`Te acabas de comer un caramelo. Quedan ${bolsaCaramelos} caramelos en la bolsa.`);
    bolsaCaramelos--; // Reducir el número de caramelos en 1
}

// Paso 3: Mensaje final
console.log('No quedan mas caramelos');

