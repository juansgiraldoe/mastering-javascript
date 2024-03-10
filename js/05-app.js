//Explicit binding.

function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
};

const informacion = {
  nombre: 'Juan',
};

const musicaFav = ['EDM', 'Rock'];

//Pasar cada elemento de manera individual.
persona.call(informacion, musicaFav[0], musicaFav[1]);

//Pasar el arreglo completo.
persona.apply(informacion, musicaFav);

//Crea una nueva funcion y se le pasan los elementos de manera individual.
const nuevaPersona = persona.bind(informacion, musicaFav[0], musicaFav[1]);
nuevaPersona();