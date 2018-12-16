//required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{

    console.log('================'.green)
    console.log(`Tabla de ${base}`.green)
    console.log('================'.green)
    for (i = 0; i <= limite; i++){
        console.log(`${base}*${i}=${base*i}\n`);
        }
}

let crearArchivo = (base, limite = 10) =>{
    return new Promise ((resolve,reject)=>{
        
        if(!Number(base)){
            reject('No ingreso un numero')
            return
        }

        let data = '';

        for (i = 0; i <= limite; i++){
        data += `${base}*${i}=${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err); 
            else 
                resolve(`Tabla de multiplicar base ${base} con limite ${limite}`.green);
            
          });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}

