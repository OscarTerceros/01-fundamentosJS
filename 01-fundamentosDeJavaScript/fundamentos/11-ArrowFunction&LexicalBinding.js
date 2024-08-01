//Arrow function

const lunch = ( protein, vegetable ) => {
  return `Almuerzo ${ protein }, ${ vegetable }`;
}

console.log( lunch( 'carne de res', 'lechuga' ));

//Arrow function implicit return
const greetingImplicit = name => `Hi, ${ name }`;
const greetingImplicitWithTwoParameters = ( name, lastname ) => `Hi, ${ name } ${lastname}`;

console.log( greetingImplicit( 'Oscar' ) );
console.log( greetingImplicitWithTwoParameters( 'Oscar', 'Terceros' ) );

//Lexical Binding
const finctionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function( message ) {
    console.log( `${ this.name } says: ${ message }`);
  },
  messageWithArrowFunction: ( message ) => {
    console.log( `${ this.name } says: ${ message }`);
  }
}

finctionalCharacter.messageWithTraditionalFunction( 'With great power comes great responsability');
finctionalCharacter.messageWithArrowFunction( 'Beware of Doctor Octopus');