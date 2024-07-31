class Animal{
  constructor( name, type ){
    this.name = name;
    this.type = type;
  }
  makeSound(){
    console.log( 'El animal emite un sonido' );
  }
}

class Dog extends Animal{
  constructor( name, type, breed) {
    super( name, type );
    this.breed = breed;
  }
  makeSound() {
    console.log( 'El perro ladra' );
  }
  run() {
    console.log(`${this.name} corre alegremente`);
  }
}

const dog1 = new Dog( 'Bobby', 'Dog', 'Pug');
console.log( dog1 );
dog1.run();
dog1.makeSound();

//Crear un nuevo método en la instancia, no en el constructor
dog1.newMethod = function() {
  console.log( 'Este es un nuevo método' );
};

Dog.prototype.secondMethod = function() {
  console.log( 'Es otro nuevo método' );
};