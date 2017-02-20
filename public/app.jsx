var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'React',
			message: 'this is the default message'
		};
	},

	render: function () {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message + '!!'}</p>
			</div>
		);
	}
});


var firstName = 'Ramses';
var messageProvider = 'Message from prop!';

ReactDOM.render(
	<Greeter
		name={firstName}
		message={messageProvider}
	/>,
	document.getElementById('app')
);