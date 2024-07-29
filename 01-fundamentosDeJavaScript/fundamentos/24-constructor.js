// funcion constructora, se crea para poder crear varios objetos con la misma estructura
/* const person = {
  name: 'Oscar',
  lastname: 'Terceros'
}; */

function Person( name, lastname ) {
  this.name = name,
  this.lastname = lastname
}
//crear una instancia de Person
const person1 = new Person( 'Andre', 'Terceros' );
const person2 = new Person( 'Nathaly', 'Terceros' );
console.log( person1, person2 );

//Agregar una propiedad a la funcion constructora con el prototype, esto añade a todas las instancias
Person.prototype.phone = '72044706';

//Si queremos añadir solamente una propiedad a una instancia especifica
person1.age = 16

//Agregar un método a la funcion constructora
Person.prototype.greet = function() {
  console.log( `Hola ${ this.name }`);
};

person1.greet();
person2.greet();