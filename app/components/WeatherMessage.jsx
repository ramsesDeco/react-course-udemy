var React = require('react');

var WeatherMessage = React.createClass({
	render: function () {
		var {location, temp} = this.props;
		return (
			<div>
				<p>It's {temp} in {location}.</p>
			</div>
		);
	}
});

module.exports = WeatherMessage;