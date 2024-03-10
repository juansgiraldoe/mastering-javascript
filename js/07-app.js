//Event Loops.

console.log('Primero.');

setTimeout(() => {
  console.log('Segundo.');
}, 0);

console.log('Tercero.');

setTimeout(() => {
  console.log('Cuarto.');
}, 0);

new Promise((resolve) => {
  resolve('Desconocido...')
}).then(res => console.log(res));


(function hola() {
  console.log('Hola');
})();

console.log('Ultimo');