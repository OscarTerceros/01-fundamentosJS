/*
Los objetos son una estructura de datos
key: value
propiedad: valor
objeto{
  propiedad: valor,
  propiedad: valor,
  propiedad: valor -> información
  Métodos -> dan interacción
}
*/

const person = {
  name:'Oscar',
  lastName: 'Terceros',
  age: 40,
  gender: 'male',
  address: {
    street: 'six',
    number: 32,
    zone: 'Koani',
    city: 'La Paz'
  },
  greet() {
    console.log( `Hola ${person.name} ${person.lastName}`);
  }
};

console.log( person );
person.greet();

//añadir una nueva propiedad al objeto
person.phone = 72044706;
console.log( person );

//añadir un nuevo método
person.bye = () => {
  console.log( `Adios ${ person.name } ${ person.lastName }` );
}
person.bye();

//borrar una propiedad
delete person.phone

//borrar un método
delete person.bye;