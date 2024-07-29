let nuevoNumero, numeroUsuario;

const numeroSecreto = Math.floor( Math.random() * 10 + 1 );
console.log( numeroSecreto );
numeroUsuario = parseInt(prompt("Adivina un número del 1 al 10"));

do{
    alert( 'El número ingresado es mayor a 10, intenta de nuevo')
    numeroUsuario = parseInt( prompt( 'Adivina un número del 1 al 10' ));
} while( numeroUsuario > 10 );

const compararNumeros = ( numeroSecreto, numeroUsuario ) => {
    if( numeroSecreto > numeroUsuario) {
        alert( `Lo siento, no adivinaste :(, El número secreto es mayor a ${ numeroUsuario }, intenta de nuevo` );
        nuevoNumero = parseInt( prompt( 'Ingresa un nuevo numero' ))
        return nuevoNumero;
    } else{
        alert( `Lo siento, no adivinaste :(, El número secreto es menor a ${ numeroUsuario }, intenta de nuevo `);
        nuevoNumero = parseInt(prompt('Ingresa un nuevo numero'))
        return nuevoNumero;
    }
}

do {
    if( numeroSecreto === numeroUsuario ) {
        console.log( '¡Adivinaste!' );
    } else{
        numeroUsuario = compararNumeros( numeroSecreto, numeroUsuario);
    }
} while( numeroSecreto !== numeroUsuario );

alert( `¡Adivinaste!, el numero secreto es ${ numeroSecreto }` );