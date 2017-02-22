var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		this.setState({ isLoading: true });

		var getTempSucces = (temp) => {
			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}
		var getTempError = (errorMessagetemp) => {
			this.setState({ isLoading: false });
			alert(errorMessage);
		}

		openWeatherMap.getTemp(location)
			.then(getTempSucces)
			.catch(getTempError)
	},
	render: function () {
		var {location, temp, isLoading} = this.state;


		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		return (
			<div>
				<h3>Weather component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}

			</div>
		);
	}
});

module.exports = Weather;