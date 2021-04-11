// Funciones
// se le agrega el const para que no pueda ser reasignada

const saludar = function( nombre ) {
  return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre )  => {
  return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre )  => `Hola, ${ nombre }`;

const saludar4 = ()  => `Hola, Mundo`;

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'usuario01'
  }
}

// para retornar directamente un objeto, se usan paréntesis
const getUser2 = () => ({
  uid: 'ABC123',
  username: 'usuario01'
});


// Tarea: transformar en funcion flecha con objeto implícito
function getActiveUser (nombre ) {
  return {
    uid: 'ABC567',
    username: nombre
  }
};

const activeUser = getActiveUser('Andrés');
console.log(activeUser);

const getActiveUser2 = (nombre ) => ({
  uid: 'ABC567',
  username: nombre
});

const activeUser2 = getActiveUser2('Andrés');
console.log(activeUser2);
