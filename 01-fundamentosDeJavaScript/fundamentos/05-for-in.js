/*

for-in
Se utiloza en objetos enumerables como ser objetos

for( variable in  objeto ){
  código a ejecutar
}

*/

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja:2,
  uva: 1
}

for( let fruta in listaDeCompras ){
  console.log( fruta );
};

for( let fruta in listaDeCompras ){
  console.log( `${fruta}: ${listaDeCompras[fruta]}` );
};