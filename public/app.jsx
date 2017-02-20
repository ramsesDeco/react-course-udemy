var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('Greeter');

var firstName = 'Ramses';
var messageProvider = 'Message from prop!';

ReactDOM.render(
	<Greeter
		name={firstName}
		message={messageProvider}
	/>,
	document.getElementById('app')
);