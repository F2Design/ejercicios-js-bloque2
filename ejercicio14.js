/* 
Ej 14

Un DJ no sabe que genero musical poner en la fiesta.

Preguntarle al usuario que genero quiere (pop, rock o rap)

Según lo que escoja el usuario, devuelve un mensaje diferente.

*/

// let genero1 = "pop";
// let genero2 = "rock";
// let genero3 = "rap";

// Mi Solucion

// Pregunta al usuario qué género musical prefiere
// let genero = prompt("¿Qué género musical prefieres? (Pop, Rock o Rap)");

// Compara la respuesta del usuario y muestra un mensaje
/* if (genero === 'pop') {
    console.log('Has elegido el genero Pop');
    

} else if(genero === 'rock') {
    console.log('Has elegido el genero Rock');
    
    
} else if(genero === 'rap') {
    console.log('Has elegido el genero Rap');

} else {
    console.log(
        "No tenemos ese género disponible. Por favor, elige entre pop, rock o rap."
    );
} */

// Solucion Curso
let genero1 = prompt("¿Qué género musical prefieres? (pop, rock o rap)");

switch (genero1) { // Evaluo la variable genero1
    case 'pop':
        alert('¡El pop es perfecto para animar la fiesta!')
        
        break;
        
        
    case 'rock':
        alert('¡El rock siempre pone a todos a vibrar!');
        
        break;

    case 'rap':
        alert('¡El rap le da un toque genial a la fiesta!');
        
        break;

    default:
        alert("No tenemos ese género disponible. Por favor, elige entre pop, rock o rap.");
}

