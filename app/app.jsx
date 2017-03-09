var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hasHistory, browserHistory } = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={TodoApp}></Route>
	</Router>,
	document.getElementById('app')
);