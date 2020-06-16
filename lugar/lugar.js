const axios = require('axios');

const getLugarLatLng = async(dir, pais) => {

    const encodeDir = encodeURI(dir);
    const encodePais = encodeURI(pais);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${ encodePais }&namePrefix=${ encodeDir }&types=CITY`,
        // timeout: 1000,
        headers: { 'X-RapidAPI-Key': '026dca4ca1msh18011c5db8c6966p1b08ccjsnbd6942929afc' }
    });

    const resp = await instance.get();

    // console.log('resp -> ', resp.data);

    if (resp.data.data.length === 0) {
        throw new Error(`No hay Resultados para ${ dir }`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const p = data.country;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        p,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}