// Desestructuración de Arreglos

const characters = ['Goku', 'Vegeta', 'Trunks'];

// como antes, ponemos dentro del arreglo nombre de variable que queremos, y lo sacará del mismo index, pomemos nada para saltar algun index
const [ , , p3 ] = characters;

const returnArray = () => ['ABC', 123];

const [ letters, numbers ] = returnArray();

// Tarea
const useState = ( value ) => [ value, () => console.log('Hello World')];

const [ name, setName ] = useState();
setName();
