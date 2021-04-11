// Objetos Literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 334152,
    lat: 14.215314,
    lon: 24.15234,
  }
};

console.log(persona);
// creando un nuevo objeto con persona: persona, que ahora se puede acortar si se llaman igual (el key y value)
console.log({ persona });
// podemos inscribitlo como tabla:
console.table(persona);

// son inmutables, asignacion directa hace que sean el mismo (si cambio uno se cambia el otro)
// para esto se usa la deconstrucción
// como es const no se puede reasignar, pero si cambiar sus atributos porque no se cambia la constante en sí, que es una referencia al espacio de memoria que se mantiene constante
const persona2 = { ...persona };
persona2.nombre = 'Peter';
// podemos acceder con .attr o strings ['attr']
persona2['appellido'] = 'Quill';

console.log(persona);
console.log(persona2);


