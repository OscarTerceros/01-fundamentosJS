/*
Capacidades que tienen las funciones al igual que otros objetos
1. Pasar funciones como argumentos -> callback

function a () {};
function b (a) {};
b(a);

//2. Retornar funciones
function a () { //--> funcion declarada
    return function () {}; //--> funcion anonima
}

//3. Asignar funciones a variables --> funcion expresada
const a = function () {};
const b = a;

//4. Tener propiedades y metodos
function a() {};
const obj = {};
a.call(obj);

//5. Anidar funciones
function a() {
  function b() {
    function c() {
      console.log('Hola');
    };
    c()
  };
  b();
};
a();

*/
//6. Almacenar funciones en objetos
const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage(){
    return console.log('🚀');
  }
};

rocket.launchMessage();