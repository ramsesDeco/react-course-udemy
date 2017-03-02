var React = require('react');

var CountdownForm = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},
	render: function () {
		return (
			<form ref="form" onSubmit={this.handleSubmit} className='countdown-form'>
				<input type="text" placeholder='Enter time in seconds' ref='seconds' />
				<button type="submit" className="button expanded">Start</button>
			</form>
		);
	}
});

module.exports = CountdownForm;