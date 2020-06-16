const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
    pais: {
        alias: 'p',
        desc: 'pais para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion, pais) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion, pais);
        // console.log('coords -> ', coords);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ coords.direccion } - ${ coords.p } es de ${ temp }ºC .`;

    } catch (e) {
        // console.log('error ->', e);
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

// console.log(argv);

getInfo(argv.direccion, argv.pais)
    .then(console.log)
    .catch(console.log);