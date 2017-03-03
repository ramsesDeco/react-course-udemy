var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	propTypes: {
		count: React.PropTypes.number,
		timerStatus: React.PropTypes.string,
		timer: React.PropTypes.any
	},
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	handleStatusChange: function (newStatus) {
		this.setState({ timerStatus: newStatus });
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({ count: 0 });
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	render: function () {
		var { count, timerStatus } = this.state;

		return (
			<div>
				<h1 className="page-title">Timer app</h1>
				<Clock totalSeconds={count} />
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
			</div>
		);
	}
});

module.exports = Timer;