/*
CLOSURE: Función que tiene acceso a variables de un ámbito externo, incluso despues de que esa función haya terminado de ejecutarse.

Ámbito léxico: Cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores
*/

function outerFunction () {
  let outerVariable = 'I am from outer function';

  function innerFunction () {
    console.log( outerVariable );
  }
  return innerFunction;
};

const closureExample = outerFunction();
closureExample();

function createCouter () {
  let counter = 0;

  return function counterA () {
    counter++
    console.log( counter );
  }
}

const counterA = createCouter();

counterA();
counterA();

const counterB = createCouter();

counterB();

function outer() {
  let message = 'Hello, ';

  function inner( name ) {
    console.log( message + name );
  }
  return inner;
}

const closureA = outer();
const closureB = outer();

closureA( 'Oscar' );
closureB( 'Natha' );