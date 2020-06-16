const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=1bd8d96a3ec11351279ac7f85995e457`)
        // console.log(' resp clima -> ', resp.data);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}