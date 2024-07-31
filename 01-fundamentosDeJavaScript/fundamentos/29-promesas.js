/*
- Estados
Las promeas tienen 3 estados
pending -> pendiente
fullfiled -> cuando se resuelva (sea verdadero o falso)
rejected -> cuando la promesa no se resolvio

- Callbacks
Además tiene dos tipos de callback
resolve -> cundo se resuelve la promesa
reject -> cuando no se puede resolver la promesa

-Métodos
then() -> entra al then cuando la promesa se resuelve
catch() -> entra al catch cuando la promesa no se resuelve y podemos atrapar el error

*/

const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    let operationSuccessful = true
    if( operationSuccessful ) {
      resolve('La opración es exitosa!!');
    } else {
      reject('Fallo la opración');
    }
  }, 2000);
});

promise
  .then( (successMessage) => {
  console.log(successMessage);
  })
  .catch( (errorMessage) => {
    console.log( errorMessage );
  });