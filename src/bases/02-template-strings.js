// template strings: podemos poner cualquier código JS dentro (también llamar funciones)

const nombre = 'Andrés';
const apellido = 'Cordero';

const nombreCompleto = `${nombre} ${apellido}`;

// puedo formatear el texto con saltos de línea y tabs usando template strings
const otroNombre = `
  ${ nombre }
  ${ apellido }
`

console.log(nombreCompleto, otroNombre);
