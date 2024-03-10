//Self.

//window === self

self.onload = () => {
  console.log('Ventana lista.');
};

const producto = {
  nombre: 'Cellphone',
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    const self = this;
    return `El producto ${self.nombre} tiene un precio de ${self.precio}`;
  },
};

console.log(producto.mostrarInfo());