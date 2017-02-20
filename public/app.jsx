var GreeterMessage = React.createClass({
	render: function () {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault(); // prevents the browser from refreshing

		var nameRef = this.refs.name;
		var name = nameRef.value;

		if (name.length > 0) {
			nameRef.value = '';
			this.props.onNewName(name);
		}

	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name" />
					<button>Set Name</button>
				</form>
			</div>
		);
	}
});

var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'React',
			message: 'this is the default message'
		};
	},
	getInitialState: function () {
		return {
			name: this.props.name
		};
	},
	handleNewName: function (name) {
		this.setState({
			name: name
		});
	},
	render: function () {
		var name = this.state.name;
		var message = this.props.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
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