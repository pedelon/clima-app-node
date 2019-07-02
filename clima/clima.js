const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1bd8d96a3ec11351279ac7f85995e457&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}