var React = require('react');

var WeatherMessage = ({location, temp}) => {
	return (
		<div>
			<p className='text-center'>It's {temp} in {location}.</p>
		</div>
	);
}

module.exports = WeatherMessage;