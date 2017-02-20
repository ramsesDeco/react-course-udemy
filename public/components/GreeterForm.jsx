var React = require('react');

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

module.exports = GreeterForm;