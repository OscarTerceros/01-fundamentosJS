//slice (indece, )

const animals = [ 'ant', 'bison', 'camel', 'duck', 'elephant' ];

console.log( animals.slice(2) ); //toma desde el indece 2 y copia los valores restantes
console.log( animals.slice( 1, 4 )); //indice inicial, hasta que elemento se copia
console.log( animals.slice( -2 )); //los dos ultimos elementos
console.log( animals.slice( 2, -2 )); //desde el indice 2 hasta antes de los dos ultimos elementos
console.log( animals.slice( )); //copia todos los elementos del array