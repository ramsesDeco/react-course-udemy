var React = require('react');

var WeatherForm = React.createClass({
	render: function () {
		return (
			<div>
				<form>
					<input type="text"/>
					<button type="submit">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;