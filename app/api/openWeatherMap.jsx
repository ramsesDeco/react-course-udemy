var axios = require('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=deb58a8662bdd8510835acaba4854cca&units=metric';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl)
			.then(succesGetWeather)
			.catch(errorGetWeather)

		function succesGetWeather(res) {
			console.log('api response succes', res);
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}

		function errorGetWeather(err) {
			console.log('api response error', err);
			throw new Error(err.response.data.message);
		}

	}
};
