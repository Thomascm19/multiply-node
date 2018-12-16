const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar','Imprime por consola la tabla de multiplicar',opciones)
                .command('crear','Genera un archivo con la tabla de multipicar',opciones)
                .help()
                .argv;

module.exports = {
    argv
}