import { getHeroeById } from './bases/08-imp-exp';

// Promises
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    resolve(heroe);
    // reject('No heroe found')
  }, 2000);
});

promise.then((heroe) => {
  console.log(heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) resolve(heroe);
      else reject('No heroe available for you...')
    }, 2000);
  });
}

getHeroeByIdAsync(4).then((heroe) => {
  console.log('Heroe', heroe)
});

