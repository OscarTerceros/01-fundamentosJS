/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contaseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

const usersDatabase = [
  {
    username: 'Andres',
    password: '123'
  },
  {
    username: 'Caro',
    password: '456'
  },
  {
    username: 'Mariana',
    password: '789'
  }
];

const usersTimeline = [
  {
    username: 'Estefany',
    timeline: 'Me encanta JavaScript'
  },
  {
    username: 'Oscar',
    timeline: 'Bebeloper es lo mejor!'
  },
  {
    username: 'Mariana',
    timeline: 'A mi me gusta más el café que el té'
  },
  {
    username: 'Andres',
    timeline: 'Yo hoy no quiero trabajar'
  }
];

const userName = prompt(`Ingresa tu usuario:`);
const password = prompt(`Ingresa tu contraseña:`);

const userValidation = ( userName, password ) => {

  const userSuccess = usersDatabase.find( userData => userData.username === userName);
  if( userSuccess !== undefined) {
    if(userSuccess.password === password){
      alert( `Bienvenido!! ${userSuccess.username}` );
      console.log( usersTimeline );

    } else {
      console.log('Passwor incorrecto');
    }
  }else {
    console.log( 'Usuario Incorrecto');
  }

}

userValidation( userName, password );