class Person {
  constructor( name, lastname, age ) {
    this.name = name,
    this.lastname = lastname,
    this.age = age
  };
  greet(){
    console.log( `Hola soy ${this.name} ${this.lastname} y tengo ${this.age} años`);
  };
};

const person1 = new Person( 'Oscar', 'Terceros', 40 );
person1.greet();
console.log( person1 );