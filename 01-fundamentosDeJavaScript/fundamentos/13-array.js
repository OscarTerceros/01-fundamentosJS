//How to create an Array?

//1. new Array() or Array()

const fruits = Array( 'apple', 'bannana', 'orange');
console.log( fruits );

const animals = new Array( 'tiger', 'elephant', 'dog' );
console.log( animals );

const numbers = Array( 1, 2, 3, 4, 5 );
console.log( numbers );

const oneNumber = Array( 12 ); // crea 12 espacios de numeros vacios
console.log( oneNumber );

//2. Array literal syntax

const modelsCars = [ 'nissan', 'suzuki', 'toyota'];
console.log( modelsCars );

const literalSyntaxOneNumber = [ 12 ];
console.log(literalSyntaxOneNumber );

const emtyArray = [];
console.log( emtyArray );


//Accessing array elements
const firstFruit = fruits[ 0 ];
console.log( firstFruit );

//length property
const numberOfFruits = fruits.length;
console.log( numberOfFruits );