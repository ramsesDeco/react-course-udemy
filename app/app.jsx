var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Ramses',
	location: 'México'	
}

var objTwo = {
	age: 25,
	...objOne
}

console.log(objTwo)

ReactDOM.render(
	<h1>Bolierplate app!</h1>,
	document.getElementById('app')
);