/*
this --- se refiere al nombre de la class
*/

class People{
  constructor( name, age ){
    this.name = name;
    this.age = age;
  }
}

const people1 = new People( 'Alice', 24 );

console.log(people1);

people1.newMethod = function() {
  console.log( `Mi nombre es ${this.name} y tengo ${this.age} años` );
}

people1.newMethod();
