//Hoisting.

//Declaration.
obtenerCliente('Juan');
function obtenerCliente(nombre) {
  console.log(`El nombre es ${nombre}`);
};

/////////////////////////////////

const obtenerCliente2 = function (nombre) {
  console.log(`El nombre es ${nombre}`);
};
obtenerCliente2('Sebastian')
