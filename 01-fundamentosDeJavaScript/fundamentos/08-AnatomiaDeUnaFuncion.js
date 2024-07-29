/*

funtion nombreDeLaFuncion( parametros) {
   código
  return(es opcional)
}

Llamado de la funcion
nombreDeLaFuncion( argumentos );

*/

function calculateDiscountedPrice ( originalPrice, discountPercentage ){
  const discount = ( originalPrice * discountPercentage ) / 100;
  const priceWithDiscount = originalPrice - discount ;
  return priceWithDiscount;
}

const originalPrice = 200;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice( originalPrice, discountPercentage );

console.log( `Original price = ${ originalPrice }$ `);
console.log( `Discoumt = ${ discountPercentage }% `);
console.log( `Price with discount = ${ finalPrice }$ `);