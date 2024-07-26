const numeroSecreto = Math.floor( Math.random() * 10 + 1);
const numeroUsuario = parseInt(prompt("Adivina un número del 1 al 10"));

console.log( numeroSecreto );

if( numeroSecreto === numeroUsuario ){
    console.log("¡Adivinaste!");
} else {
    console.log( `Lo siento, no adivinaste :(, El número secreto era ${numeroSecreto} `);
}