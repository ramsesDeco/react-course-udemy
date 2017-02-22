var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			location: 'Miami',
			temp: 9
		}
	},
	handleSearch: function (location) {

		var that = this;
		openWeatherMap.getTemp(location)
			.then(getTempSucces)
			.catch(getTempError)

		function getTempSucces(temp) {
			console.log('getTempSucces, temp', temp);
			that.setState({
				location: location,
				temp: temp
			});
		}
		function getTempError(errorMessage) {
			console.log('getTempError, err', errorMessage);
			alert(errorMessage);
		}

	},
	render: function () {
		var {location, temp} = this.state;
		return (
			<div>
				<h3>Weather component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				<WeatherMessage location={location} temp={temp} />
			</div>
		);
	}
});

module.exports = Weather;