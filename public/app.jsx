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

		var updates = { }


		// Name
		var nameRef = this.refs.name;
		var name = nameRef.value;

		if (name.length > 0) {
			nameRef.value = '';
			updates.name = name;
		}

		// Message
		var messageRef = this.refs.message;
		var message = messageRef.value;

		if (message.length > 0) {
			messageRef.value = '';
			updates.message = message;
		}

		this.props.onNewData(updates);
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name" placeholder="Enter name"/><br/>
					<textarea ref="message" placeholder="Enter message" ></textarea><br/>
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
			name: this.props.name,			
			message: this.props.message
		};
	},
	handleNewData: function (updatesObject) {
		this.setState(updatesObject);
	},
	render: function () {
		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
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