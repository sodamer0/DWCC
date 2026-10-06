// Pedir el nombre al usuario
let nombre = prompt('¿Cómo te llamas?', 'nombre por defecto');

// Comprobar si el usuario canceló o dejó el campo vacío
if (nombre === null || nombre.trim() === '') {
    // Saludo genérico
    console.log('¡Hola, visitante! Bienvenido a la página.');
} else {
    // Saludo personalizado
    console.log(`¡Hola, ${nombre}! Bienvenido a la página.`);
}
