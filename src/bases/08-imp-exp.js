// imp tab for snippet
import heroes, { owners } from '../data/heroes';

// console.log( heroes );

export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter( ( heroe ) => heroe.owner === owner);

/* console.log(getHeroeById(5));
console.log(getHeroesByOwner('Marvel'));
console.log(owners) */
