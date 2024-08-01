//Funciones puras

/*
Caracteristicas
1. Dada una misma entrada se obtiene la misma salida
2. No producen efectos secundarios

Side Effects (efectos secundarios)
1. Modificar variables globales
2. Modificar parámetros
3. Solicitudes HTTP
4. Imprimir mensajes en pantalla o en consola
5. Manipulacion del DOM
6. Obtener la hora actual (día, fecha, etc.)
*/

//Función pura
function sum(a, b) {
  return a+b;
}

function square( x ) {
  return x * x;
}

function addTen( y ){
  return y + 10;
}

const number = 5;
const finalResult = addTen( square( number ) );
console.log( finalResult );

//función impura
function sumImpure(a, b) {
  console.log( 'A: ', a);
  return a+b;
}

let total = 0;
function sumWithSideEffect(a) {
  total += a
}

