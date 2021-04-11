// Desestructuración de Objetos
const persona = {
  name: 'Tony',
  age: 45,
  code: 'Ironman',
};

// dentro de los {} van los keys que vamos a extraer
// si queremos un nombre distinto para la variable, ponemos ket: newName
const { name: name2, age, code } = persona;

// podemos desestructurar directamente en los argumentos de la funcion
// podemos poner propiedades que estén en el objeto con un default, en ese caso si el objeto la tiene se usa esa, si no el default
const useContext = ({ name, age, code, range = 'Cap' }) => {
  return {
    codeName: code,
    years: age,
    latlon: {
      lat: 14.1232,
      lon: -12.3232
    }
  }
};

// si queremos las keys de un objeto interno, ponemos : (como para cambiar el nombre) y una nueva desestructuración
const { codeName, years, latlon: { lat, lon } } = useContext(persona);
