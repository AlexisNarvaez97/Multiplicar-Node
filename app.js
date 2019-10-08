// Requireds
const multiplicar = require("./multiplicar/multiplicar");

const argv = require('./config/yargs').argv;

var colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar"); // Destructuración



// const fs = require("fs"); // Bases de node
// const fs = require('express'); // Paquetes no nativos de node.
// const fs = require('./fs'); // Archivos locales.

// let base = '8';

// console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    // console.log("listar");
    break;
  case "crear":
    console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: `.red + `${archivo}`.green))
      .catch(err => console.log(err));
    break;

  default:
    console.log("Comando no reconocido");
}

// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Base', argv.base);
// console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//   resultado = +i;
//   data += `${base} * ${i} = ${base * i}\n`;
//   console.log(`${base} * ${i} = ${base * i}`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
//   if (err) throw err;
//   console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });
