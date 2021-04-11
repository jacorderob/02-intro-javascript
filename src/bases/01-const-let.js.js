// Variables y constantes
// const y vars son de scope, si declaro nuevamente dentro de otro scope (una funcion o if por ejemplo) se sobreescribe dentro de ese scope
const nombre = 'Andrés';

let valorDado = 5;
valorDado = 4;

if ( true ) {
  const valorDado = 6;
  console.log(valorDado);
}

console.log(valorDado);
