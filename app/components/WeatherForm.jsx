var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function (event) {
		event.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}

	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="search" ref="location" placeholder='Search weather by city' />
					<button type="submit" className="button expanded hollow">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;