const argv = require('./config/yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');

// Aquí se llama a la clase y los métodos
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e))

        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]; // split, convertir de un string a un arreglo

//Se crea el archivo
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));

// node app --base=5 a b c d e