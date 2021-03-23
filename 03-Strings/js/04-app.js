// quitar espacios en blanco
const producto = "                                 TABLET             ";
console.log(producto);
console.log(producto.length);

// cortar inicio
producto.trimStart();
console.log(producto.trimStart());

// cortar final
producto.trimEnd();
console.log(producto.trimEnd());

// cortar inicio y final
// anterior
console.log(producto.trim());
// nuevas funciones
console.log(producto.trimStart().trimEnd());



