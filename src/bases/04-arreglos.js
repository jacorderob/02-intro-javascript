// Arreglos

// construccion con new Array no es recomendable a menos que queramos darle un tamaño inicial
const arreglo = new Array( 100 );
//no es fijo
arreglo.push(1);

const arr = [];

// no es recomendable, porque modificamos el arreglo original
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);

// al igual que para objetos, se pasan por referencia
let arr2 = [...arr, 5]

// map crea un NUEVO ARREGLO, parecido a ...arr
const arr3 = arr2.map( (numero) => numero * 2);

console.log(arreglo);
console.log(arr);
console.log(arr2);
console.log(arr3);
