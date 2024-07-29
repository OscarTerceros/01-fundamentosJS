//spread operator
//1.Copy an array

const originalArray = [1, 2, 3, 4, 5, 6];
const copyOfArray = [...originalArray]; //Se utiliza para no mutar el array original

console.log( originalArray );
console.log( copyOfArray );

//2. Combining array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log( array1 );
console.log( array2 );
console.log( combinedArray );

//3. Creating Arrays with additional elements

const base = [1, 2, 3];
const arrayWithAdditionalElements = [...base, 4, 5, 6];

console.log( base );
console.log( arrayWithAdditionalElements );

//4. Pass elements to functions

function sum( a, b, c ){
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum( ...numbers );

console.log( result );