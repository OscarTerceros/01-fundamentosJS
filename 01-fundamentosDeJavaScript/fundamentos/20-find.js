//Methods that iterate over an array
//Methods that DO NOT modify the original array (Inmutability)

//find()
const multipleOf5 = [5, 10, 15, 20, 25, 30];
const firstNumerGreaterthan10 = multipleOf5.find( number => number > 10 );
console.log( multipleOf5 );
console.log( firstNumerGreaterthan10 );

//findIndex()
const randomNumbers = [6, 14, 27, 56, 40];
const indexNumber = randomNumbers.findIndex( number => number > 50 );

console.log( randomNumbers );
console.log( indexNumber );