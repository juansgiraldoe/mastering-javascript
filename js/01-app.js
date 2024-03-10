//Scope. (Alcance de una variable).

//Global
const cliente = 'Sebastian';

function mostrarCliente() {
  console.log(cliente);
};

////////////////////////////////////

function mostrarCliente() {
  //Scope Local.
  const cliente = 'Juan';
  console.log(cliente);
};
mostrarCliente();

//////////////////////////
const login = true;

function clienteLogin() {
  const cliente = 'Juan';
  console.log(cliente);
  
  if (login) {
    //Scope por bloque.
    const cliente = 'Admin';
    console.log(cliente);
  };
};

clienteLogin();