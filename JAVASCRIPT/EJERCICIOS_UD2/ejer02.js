console.log("=== Ejercicio 2 — Typeof ===");

// 1. Solicitar un número al usuario
let dato = prompt('Introduce un número:');

// 2. Mostrar el dato por consola
console.log("Dato recibido:", dato);

// 3. Mostrar el tipo de dato recibido
console.log("Tipo de dato recibido:", typeof dato);

// 4. Súmale 5 y muéstralo por consola
console.log("Sumando 5 (sin convertir):", dato + 5);

// 5. Conviértelo a número
let numero = Number(dato);
// También podrías usar: parseInt(dato) o parseFloat(dato)

// 6. Muestra el tipo de dato obtenido
console.log("Dato convertido:", numero);
console.log("Tipo de dato después de convertir:", typeof numero);

// Extra: Suma correcta después de convertir
console.log("Sumando 5 (después de convertir):", numero + 5);