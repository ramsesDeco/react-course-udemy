var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false,
		}
	},
	handleSearch: function (location) {
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		var getTempSucces = (temp) => {
			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}
		var getTempError = (e) => {
			this.setState({
				isLoading: false,
				errorMessage: e.message
			});
		}

		openWeatherMap.getTemp(location)
			.then(getTempSucces)
			.catch(getTempError)
	},
	render: function () {
		var {location, temp, isLoading, errorMessage} = this.state;


		function renderMessage() {
			if (isLoading) {
				return <h3 className='text-center'>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage} />
				);
			}
		}

		return (
			<div>
				<h1 className='text-center page-title'>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;